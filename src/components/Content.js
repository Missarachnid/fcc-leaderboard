import React from 'react';
import { Table, Image} from 'react-bootstrap';
const everUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

class Content extends React.Component {
  state = {
    recent: [],
    ever: [],
    toggle: true
  }

  retrieveData(url, currentState){
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({[currentState]: data})
    );
  }

  componentDidMount(){
    this.retrieveData(everUrl, 'ever');
    this.retrieveData(recentUrl, 'recent');
  }

  dataToggle(input){
    if(this.state.toggle !== input){
      this.setState({toggle: input});
      
    }
  }

  render(){
    const {recent, ever, toggle} = this.state;
    let choice;
    this.toggle ? choice = ever : choice = recent;
    return(
      <div className='container'>
        <div className='content'>
          <Table striped bordered condensed hover className='main'>
              <thead className='thead'>
                <tr>
                  <th>#</th>
                  <th className='camper'>Camper</th>
                  <th onClick={(event) => this.dataToggle(false)}>Points in the last 30 days {toggle === false && (<span className='fa fa-caret-down'></span>)}</th>
                  <th onClick={(event) => this.dataToggle(true)}>Points of all time {toggle && (<span className='fa fa-caret-down'></span>)}</th>
                </tr>
              </thead>
              <tbody>
              {choice.map((entry, index) => (
                <tr key={entry.username}>
                  <td>{index + 1}</td>
                  <td className='name'>
                    <a href={`https://www.freecodecamp.org/entry.username/${entry.username}`} target='blank'>
                      <Image src={entry.img} alt={`avatar of ${entry.username}`} className='img' circle />
                      {entry.username}
                    </a>
                  </td>
                  <td>{entry.recent}</td>
                  <td>{entry.alltime}</td>
                </tr>
                ))}
              </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Content;