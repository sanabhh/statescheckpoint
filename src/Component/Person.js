import React from "react"


class Person extends React.Component{
    constructor(){
        super()
       
        this.state={
            textB : '',
            Fullname : 'Sana',
            bio:'Developer',
            imgSrc:'/logo512.png',
            profession:'Developer',
            count : 0
        }
    }

    componentDidMount(){
        setInterval(()=>{this.setState({count : this.state.count+1})}, 1000);
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
               <input type='text' onChange={(e)=>this.setState({textB : e.target.value})}/>
                <h2>{this.state.textB}</h2>
                <h3>{this.state.Fullname}</h3>
                <h4>{this.state.bio}</h4>
                <img src={this.state.imgSrc} alt='Not Found'></img>
                <h5>{this.state.profession}</h5>
            </div>
        )
    }
}










    // let Person =({fullName,bio, imgSrc, profession})=>{

    //     return(
           
    //     <div>
    //     <h1>My fullName is: {fullName}</h1>
    //     <h2>My Bio is: {bio}</h2>
    //     <h3>My Profession is: {profession}</h3>
    //     <img src="/soliel.jpeg"></img>


    // </div>


    // //     )
    // // }

    export default Person;