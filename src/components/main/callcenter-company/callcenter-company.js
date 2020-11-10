import React from 'react'

import './callcenter-company.css'

const CallCenterCompany = () => {
    return(
        <div className='containe-fluid background-dark py-5'>
            <div className='container'>
                <div>
                    <h1 className='header-text'>Есть вопрос? Ответим через 36 секунд</h1>
                    <h2 className='h2-text'>Оставьте заявку, и наш специалист проконсультирует вас</h2>
                    <hr />
                </div>
                <div>
                    <form onSubmit={e => e.preventDefault()} className='row mt-5'>
                        <div className='col-sm-4'>
                        <input
                            type="text"
                            placeholder="ваше имя"
                            onChange={e => e.preventDefault()}
                            className='input'
                        />
                        </div>
                        <div className='col-sm-4'>
                        <input
                            type="text"
                            placeholder="телефон"
                            onChange={e => e.preventDefault()}
                            className='input'
                        />
                        </div>
                        <div className='col-sm-4'>
                            <div className='d-flex flex-column'>
                            <button
                            className='button'
                            onClick={(e) => e.preventDefault()}
                            >
                                Заказать звонок
                            </button>
                        <label className='label mt-3 d-block' htmlFor="check"><input  type="checkbox"  onChange={e=>e.preventDefault()} id="check" />для согласия на обработку данных</label>
                            </div>
                        </div>
                        
                        
                        
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CallCenterCompany;