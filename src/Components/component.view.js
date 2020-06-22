
import styled from "styled-components";

export default {
    rowtitle: styled.div`
    background: #F3F3F3;
    .wrapperTitle{
        text-align: center;
        color: blue;
        font-size: 28px;
    }
    `,
    productrow: styled.div`
    background: white !important;
    margin: 10px !important;
    width: 300px  !important;

    .product-img{
        height: 250px;
    }
    .card{
        width: 100%;
        border-color: transparent;
        transition: all 0.2s linear;
        &:hover{
            border: 0px solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
        }
    },
    .card-footer{
        display: flex;
        justify-content: space-around;
        background: #EAC58D;
        background: transparent;            // прозорий фон 
        transition: all 0.2s linear;        // перехід від початку до кінця з одинаковою швидкістю
        &:hover{
            background: rgba(247, 247, 247);
        }
    },
    .img-container{
        text-align: center !important;
        position: relative;
      //  overflow: hidden;   
    }
    .img-container:hover .product-img{
        transform: scale(0.9);                   // зменшує і збільшує розмір картинки при наведені на нього.
        transition: all 0.6s linear;           
    }
    `,
    productList: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: #F3F3F3;
    `,
    productListRow: styled.div`
    background: #F3F3F3;
    `,
    btnbuy: styled.button`
    color: white;
    font-size: 22px;
    padding: 8px;
    background: #729FCF;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 10px 0 0 0;
    border: 0px solid blue;
    `,
    detailsrow: styled.div`
    display: block !important;
    margin: 0 auto !important;
 

    .detail-img{
        height: 500px;
    },
    .detail-row{
         display: flex ;
    },
    .detailHead{
        padding: 0 20px;
    },
    .title{
        font-size: 40px !important;
    },
    .detailFooter{
       padding: 0px 90px 0px 90px;
       font-family: 'Caveat', cursive !important;
    }
    `,
    footerbtn: styled.div`
    text-align: center !important;
    .btnfooter{
        background: transparent;
        padding: 10px 20px 10px 20px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 10px;
        border: 2px solid #1998F7;
        margin: 10px;
        background: #72C5CF;
        color: #2E3436;
        &:hover{
            color: white;
        }
    }
    `,
    modalbox: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        padding: 10px;
        background: white;
    }
    .modalimg{
        height: 400px;
    }
    .backModal{
        background: transparent;
        padding: 10px 10px 10px 20px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 10px;
        border: 2px solid #1998F7;
        margin: 10px;
        background: #72C5CF;
    }
    .row{
        text-align: center;
    }
    `
}