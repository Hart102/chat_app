export class activeUser {
    constructor(props){
      Object.assign(this, {
        id: props.id,
        firstname: props.firstname,
        lastname: props.lastname,
        dept: props.department,
      })
    }

    Firstname() {
      return(
        this.firstname
      )
    }
    Lastname() {
      return(
        this.lastname
      )
    }
    userId() {
      return(
        this.id
      )
    }
    userDepartment() {
      return(
        this.dept
      )
    }
  }