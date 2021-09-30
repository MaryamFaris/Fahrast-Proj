import React from 'react';
import "./orders.css"; 
import {IoEllipsisHorizontalSharp,IoTrashOutline} from "react-icons/io5";
import {Card} from "react-bootstrap";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
let MyOrders =()=>{
    const cardInfo =[
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي",aurtherName: "john g. avildesn", image:"https:/0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAD ", bookTitle:"The Dark Knight ", orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000", bookCount:"1", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", aurtherName: "john g. avildesn", image:"images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAN ", bookTitle:"B ", orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"1",libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", aurtherName: "john g. avildesn",image:"https://www.google.com/url?sa=i&url=https%3ICFQAAAAAdAAAAABAT ", bookTitle:"C ",  orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"1", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", aurtherName: "john g. avildesn",image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", bookTitle:"D ",  orderNo:"123", orderDate: "15/1/2020", bookPrice:"10000" ,priceAll: "3000",  bookCount:"1", libraryName:"مكتبة بابيلون"},
        {customerName:"Ahmed", phoneNo:"075138890139", address:"الموصل حي الزراعي", aurtherName: "john g. avildesn",image:"7294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOD8jdK02PICFQAAAAAdAAAAABAT ", bookTitle:"D ",  orderNo:"123", orderDate: "15/1/2020",bookPrice:"10000" ,priceAll: "3000",  bookCount:"1", libraryName:"مكتبة بابيلون"},
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
                <lh className="listName">معلومات الطلب</lh>
                <ul>
                <li>اسم الزبون  /  {card.customerName}  </li>
                <li>  تاريخ الطلب / {card.orderDate}</li>
                <li>  رقم الهاتف  / {card.phoneNo}</li>
                <li>  رقم الطلب / {card.orderNo}</li>
                <li>  السعر شامل التوصيل / {card.priceAll}</li>
                <li>  العنوان / {card.address}</li>
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
export default MyOrders;