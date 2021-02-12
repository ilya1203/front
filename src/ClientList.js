import  React, { Component } from  'react';
import ClientsService from './GetsComponent';

const  customersService  =  new  ClientsService();

class  ClientList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        customers: [],
		pk: props.pk
    };

}

componentDidMount() {
    var  self  =  this;
    customersService.getClient({pk: this.state.pk}).then(function (result) {
        console.log(result);
        self.setState({ customers:  result.data, info: result.LotInfo.nameOfLot,
		tm_ch: result.LotInfo.hour,
		tm_min: result.LotInfo.minute,
		tm_sec: result.LotInfo.sec});
    });
	
}



render() {

    return (
		
        <div  className="customers--list">
		<div className='header'> <p className="h-1">Ход торгов <strong>{this.state.info} </strong> </p> </div> <hr />
		<p className="bg-red info">Уважаемые участники, во-время вашего хода вы можете изменить параметры торгов указанных в таблице:</p>
			<div className='firstRow'><div className='primary-text'><p>ХОД</p></div> <div className="timer bg-red-2"><p id='time'>
			
			{this.state.tm_ch}
			:
			<span id='min'>{this.state.tm_min}</span>
			:
			<span id='sec'>{this.state.tm_sec}</span>
			</p></div></div>
			
            <table>
				
				<tr className='firstLine primary-text'> 
					<td className='firstTD'>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</td>
					{this.state.customers.map(c => <td className='usr'>Участник №{c.pk}<br/>{c.name}</td>)}
					
				</tr>
				<tr className='bg-gray'> 
					<td >Наличие комплексныйх мероприятий, повышающих стандарты качества изготовления</td>
					{this.state.customers.map(c => <td className='usr'>{c.standp}</td>)}
				</tr>
				<tr> 
					<td >Срок изготовления срока лота, дней</td>
					{this.state.customers.map(c => <td className='usr'>{c.term}</td>)}
				</tr>
				<tr className='bg-gray'> 
					<td >Гарантийные обязательства, мес</td>
					{this.state.customers.map(c => <td className='usr'>{c.garant}</td>)}
				</tr>
				<tr> 
					<td >Условия оплаты</td>
					{this.state.customers.map(c => <td className='usr'>{c.pers}%</td>)}
				</tr>
				<tr className='bg-gray'> 
					<td >Стоимость изготовления лот, руб (без НДС)</td>
					{this.state.customers.map(c => <td className='usr'><div className='primary-text strong'>{c.price} руб</div> <div className='red strong'>-25,000 руб</div>	<div className='green strong'>{c.price - 25000} руб</div></td>)}
			
										
				</tr>
				<tr> 
					<td >Действия:</td>
				</tr>
			</table>
            
            
        </div>
        );
  }
}
export  default  ClientList;