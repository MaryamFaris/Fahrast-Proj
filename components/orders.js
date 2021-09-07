import React from 'react';
import "./orders.css"; 
import {IoEllipsisHorizontalSharp,IoTrashOutline} from "react-icons/io5";
import {Card} from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
let MyOrders =()=>{
    const cardInfo =[
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", image:"https:/0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAD ", bookTitle:"The Dark Knight ", orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000", bookCount:"1", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي",  image:"images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAN ", bookTitle:"B ", orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"4",libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", image:"https://www.google.com/url?sa=i&url=https%3ICFQAAAAAdAAAAABAT ", bookTitle:"C ",  orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"3", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", bookTitle:"D ",  orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"1", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", bookTitle:"D ",  orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"5", libraryName:"مكتبة بابيلون"},
    ];
    let cardInfoLen= cardInfo.length;
    const renderCard = (card , index)=>{
        if (cardInfoLen >=1){
            return(<div className="card-container">
                <Card key={index} >
            <Card.Body>
            <button className="icon" onClick={()=>console.log('Closed')} title="اضافة الى منجز"><IoEllipsisHorizontalSharp /></button>
            <button className="icon" onClick={()=>console.log('Closed')} title="حذف الطلب"><IoTrashOutline /></button>
                <div className="orderInfo">
                <ListGroupItem>معلومات الطلب</ListGroupItem>
                <ListGroup><Card>{card.customerName} / اسم الزبون </Card>
                <Card>{card.orderDate} / تاريخ الطلب</Card>
                <Card>{card.phoneNo} / رقم الهاتف </Card>
                <Card>{card.orderNo} / رقم الطلب</Card>
                <Card>{card.priceAll} / السعر شامل التوصيل </Card>
                <Card>  العنوان / {card.address}</Card>
                </ListGroup>
                </div>
                <div className="flexInfo">
                <div className="bookImg"><Card.Img src={card.image}/></div>
                <div className="bookInfo">
                <Card.Title>{card.bookTitle}</Card.Title>
                <div> العدد {card.bookCount}  / السعر {card.bookPrice} </div>
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
export default MyOrders;