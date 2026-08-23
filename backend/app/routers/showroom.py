from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import ShowroomInfo, Enquiry
from app.schemas import ShowroomResponse, EnquiryCreate, EnquiryResponse

router = APIRouter(tags=["Showroom & Contact"])

@router.get("/showroom", response_model=ShowroomResponse)
def get_showroom_details(db: Session = Depends(get_db)):
    showroom = db.query(ShowroomInfo).first()
    if not showroom:
        raise HTTPException(status_code=404, detail="Showroom details not found")
    return showroom

@router.get("/enquiries", response_model=List[EnquiryResponse])
def get_all_enquiries(db: Session = Depends(get_db)):
    return db.query(Enquiry).order_by(Enquiry.id.desc()).all()

@router.post("/enquiries", response_model=EnquiryResponse, status_code=201)
def submit_enquiry(enquiry_in: EnquiryCreate, db: Session = Depends(get_db)):
    enquiry = Enquiry(**enquiry_in.model_dump())
    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)
    return enquiry

