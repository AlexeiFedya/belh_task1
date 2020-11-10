import React from 'react'
import {Link} from 'react-router-dom'

import icon from './logo1.svg'
import mastercard from './mastercard.svg'
import visa from './visa.svg'
import paypal from './paypal.svg'
import './footer-company.css'

const FooterCompany = () => {
    return (
        <div className='containe-fluid background-dark py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <div className='row'>
                        <div className='col-sm-6'>
                            <Link to='/' className='d-block mb-4'>
                                <img src={icon} alt="logo"/>
                            </Link>

                            <Link to='/' className='d-block footer-text'>
                                Политика конфеденциальности
                            </Link>

                            <Link to='/' className='d-block footer-text'>
                                Соглашение на обработку персональных данных
                            </Link>
                        </div>
                        <div className='col-sm-6'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                <Link to='/' className='d-block footer-text'>
                                    Преимущества
                                </Link>

                                <Link to='/' className='d-block footer-text'>
                                    Отзывы
                                </Link>

                                <Link to='/' className='d-block footer-text'>
                                    Консультация
                                </Link>
                                </div>
                                <div className='col-sm-6'>
                                <Link to='/' className='d-block footer-text'>
                                    Кейсы 
                                </Link>

                                <Link to='/' className='d-block footer-text'>
                                    Контакты
                                </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className='col-sm-6'>
                        <div className='float-right d-flex flex-column'>
                            <button className='footer-button mb-3'>Заказать звонок</button>

                            <Link to="tel:+375 (29) 500-36-00" className='footer-text'>
                                +375 (29) 500-36-00
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                Работа у нас
                            </Link>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                День открытых дверей
                            </Link>

                            <Link to='/' className='d-block col-sm-2 footer-text'>
                                Благотворительнось
                            </Link>

                            <div className='col-sm-4 d-flex'>
                                <Link to='/' className='d-block'>
                                    <img src={mastercard} alt="mastercard"/>
                                </Link>

                                <Link to='/' className='d-block mx-3'>
                                    <img src={visa} alt="visa"/>
                                </Link>

                                <Link to='/' className='d-block'>
                                    <img src={paypal} alt="paypal"/>
                                </Link>
                            </div>
                            
                            <Link to='mailto:hello@eventbiz.pro' className='d-block col-sm-2 footer-text'>
                                hello@eventbiz.pro
                            </Link>

                </div>
            </div>
        </div>
    )
}

export default FooterCompany;