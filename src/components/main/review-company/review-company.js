import React from 'react'

import foto1 from './foto1.png'
import foto2 from './foto2.png'
import foto3 from './foto3.png'
import foto4 from './foto4.png'

import './review-company.css'

const ReviewCompany = () => {
    return(
        <div>
            <div>
                <h1 className='header-text'>Почитайте отзывы о нас</h1>
                <h2 className='h2-text'>Каково это было для наших клиентов</h2>
                <hr/>
            </div>
            <div>
                <div>
                    <p>Благодаря слаженной и конструктивной работе сотрудников 
                    EventBizPro во время проведения мероприятия был создан прецедент
                    абсолютно нового подхода к проведению узконаправленных международных
                    конференций. Великолепная атмосфера, великолепные люди. Это лучшая
                    площадка для встречи людей, которые с энтузиазмом делают бизнес.....</p>
                    <span>Алексей Гаврилов</span>
                    <span>Nexans Russia</span>
                </div>
                <div>
                    <div>
                        <img src={foto1} alt="facebook_icon"/>
                    </div>
                    <div>
                        <img src={foto2} alt="facebook_icon"/>
                        <img src={foto3} alt="facebook_icon"/>
                        <img src={foto4} alt="facebook_icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCompany;