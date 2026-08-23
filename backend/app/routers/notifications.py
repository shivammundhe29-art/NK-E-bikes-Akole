from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import Notification
from app.schemas import NotificationResponse

router = APIRouter(prefix="/notifications", tags=["Notifications"])

@router.get("", response_model=List[NotificationResponse])
def get_notifications(user_id: Optional[int] = None, db: Session = Depends(get_db)):
    query = db.query(Notification)
    if user_id:
        query = query.filter((Notification.user_id == user_id) | (Notification.user_id == None))
    return query.order_by(Notification.id.desc()).all()

@router.post("/{notification_id}/read", response_model=NotificationResponse)
def mark_notification_read(notification_id: int, db: Session = Depends(get_db)):
    notif = db.query(Notification).filter(Notification.id == notification_id).first()
    if not notif:
        raise HTTPException(status_code=404, detail="Notification not found")
    notif.is_read = True
    db.commit()
    db.refresh(notif)
    return notif

@router.post("/read-all")
def mark_all_read(user_id: Optional[int] = None, db: Session = Depends(get_db)):
    query = db.query(Notification)
    if user_id:
        query = query.filter((Notification.user_id == user_id) | (Notification.user_id == None))
    query.update({Notification.is_read: True})
    db.commit()
    return {"message": "All notifications marked as read"}
