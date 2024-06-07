import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const MyForm = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        phoneNumber: '',
        job: '',
        way: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7777/post', formData);
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container">
            <div className="vectortwo"></div>

            <div className="task">
                <h1 className='zadachi'>Какие задачи мы решаем</h1>

                <div className="grid">
                    <div className="gridchild"><h1>01.</h1>
                        <br />
                        <br />
                        <p>Продумываем кому, как, <br /> какую и где показывать <br /> рекламу <br /> так, чтобы максимально <br /> быстро получить клиентов. <br /> <br /></p>
                        <p>Проведем воронку продаж от упаковки до клиентов</p>

                    </div>
                    <div className="gridchild">
                        <h1>02.</h1>
                        <br />
                        <br />
                       <p>Находим способ делать это дешево.</p> 
                        <br />
                        <br />
                        <p>С возвратностью <br /> инвестиций с рекламы <br /> свыше 100%</p>
                    </div>
                    <div className="gridchild">
                        <h1>03.</h1>
                        <br />
                        <br />
                        <p>Запоминаемся клиентам <br /> <br /></p>
                       <p>Узнаваемость и лояльность <br /> от STARTUPа до бренда</p> 
                    </div>
                    <div className="gridchild">
                        <h1>04.</h1>
                        <br />
                        <br />
                        <p>Масштабируем результаты <br /> <br /></p>

                        <p>Постоянно контролируем <br /> воронку, чтобы находить <br /> только результативные <br /> каналы</p>

                    </div>
                    <div className="gridchild">
                        <h1>05.</h1>
                        <br />
                        <br />
                        <p>Работаем вашим с отделом продаж <br /> <br /></p>

                        <p>Помогаем выстроить или <br /> работаем с уже созданным <br /> отделом продаж</p>

                    </div>
                </div>
            </div>
            <div className="contact">
                <h1>Контакты</h1>

                <div className="formblock">
                    <p className='ppp'>Ответьте на 4 вопроса о вашем бизнесе, <br />  чтобы мы могли рассчитать экономику <br /> бизнеса и предложить стратегию продвижения</p>
                    <form onSubmit={handleSubmit}>
                        <input value={formData.firstName} onChange={handleChange} type="text" name='firstName' id='name' placeholder="Как вас зовут?" /> <br />
                        <input value={formData.phoneNumber} onChange={handleChange} type="number" name="phoneNumber" id='phone' placeholder="Ваш телефон" /> <br />
                        <input value={formData.job} onChange={handleChange} type="text" name="job" id='job' placeholder="Сфера вашей деятельности" /> <br />
                        <input value={formData.way} onChange={handleChange} type="text" name="way" id='way' placeholder="Цели и задачи" /> <br />
                        <button type='submit'>Отправить заявку</button>
                    </form>
                </div>


                <div className="absolut">
                    <div className="flexed"><div className="imgicon1"></div> <p>+998 (90) 6000768 <br /></p></div>
                    <div className="flexed"><div className="imgicon2"></div> <p>madad_agency <br /></p></div>
                    <div className="flexed"><div className="imgicon3"></div> <a href="madadagency22@gmail.com">madadagency22@gmail.com</a> <br /></div>

                </div>
            </div>

        </div>
    )
}

export default MyForm