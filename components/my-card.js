import React from 'react';
import "./my-card.css"; 
import {Card} from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
let MyCard =()=>{
    const cardInfo =[
        {image:"https:/0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAD ", bookTitle:"The Dark Knight ",aurtherName: "john g. avildesn", text:"kghfdjhgjdndg ", orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000", bookCount:"1", libraryName:"مكتبة بابيلون"},
        {image:"images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAN ", bookTitle:"B ",aurtherName: "john g. avildesn", text:" dgjhdghgf", orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"4",libraryName:"مكتبة بابيلون"},
        {image:"https://www.google.com/url?sa=i&url=https%3ICFQAAAAAdAAAAABAT ", bookTitle:"C ",aurtherName: "john g. avildesn", text:" digjfjgdjk" , orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"3", libraryName:"مكتبة بابيلون"},
        {image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", aurtherName: "john g. avildesn", bookTitle:"D ", text:"gjdifjgdjdgjd ", orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"1", libraryName:"مكتبة بابيلون"},
        {image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", aurtherName: "john g. avildesn",bookTitle:"D ", text:"gjdifjgdjdgjd " ,orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"5", libraryName:"مكتبة بابيلون"},
    ];
    let cardInfoLen= cardInfo.length;
    const renderCard = (card , index)=>{
        if (cardInfoLen >=1){
            return(<div className="card-container">
                <Card key={index} >
            <Card.Body>
                <div className="orderInfo">
                <lh className="listName">معلومات الطلب</lh>
                <ul>
                <li>  تاريخ الطلب / {card.orderDate}</li>
                <li>  رقم الطلب / {card.orderNo}</li>
                <li>  السعر شامل التوصيل / {card.priceAll}</li>
                </ul>
                </div>
                <hr></hr>
                <div className="flexInfo">
                <div className="bookImg"><Card.Img src={card.image}/></div>
                <div className="bookInfo">
                <div className="bookTitle">{card.bookTitle}</div>
                <div >{card.aurtherName}</div>
                <div>  {card.bookCount}x العدد  </div>
                <div>  {card.bookPrice} IQ   السعر</div>
                <Card.Text>{card.libraryName}</Card.Text>
                </div>
                </div>
            </Card.Body>
        </Card>
        </div>
        )}
        else{
        return(<div className="card-container">
            <Card key={index}>
            <Card.Body>
                <ListGroup>
                  <ListGroupItem>لم يتم حجز كتاب</ListGroupItem>
                </ListGroup>
            </Card.Body>
            
        </Card>
        </div>
            )}

    }
    return <div className="App">
        {cardInfo.map(renderCard)}
    </div>
}
export default MyCard;