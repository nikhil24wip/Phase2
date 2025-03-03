import Menu from "../menu/menu"

const Third = (props) =>{
    return (
        <div>
          <Menu/>
           First Name : {props.firstname} <br/>
           Last Name : {props.lastname} <br/>
           Company : {props.company}
        </div>
    )
}
export default Third