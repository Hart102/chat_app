//========Clear input function========
export const clearInput = (element) => { 
    return document.querySelector(element).value = ''
}

export const elementSelector = (element) => document.querySelector(element)

//========send message function========
let input, msgCategory;
export class SendMessage { 
  constructor(props) {
    Object.assign(this, {
      firstname: props.firstname,
      userId: props.id,
      department: '',

      message: ({
        senderId: '',
        msg: '', 
        senderName: '', 
        category: '',
      }),
    })
  }
  msgCategory(cat){
    return msgCategory = cat
  }
  captureUserMsg(e){
    if (e) {
      this.message.msg = e
      this.message.senderName = this.firstname
      this.message.senderId = this.userId
      this.message.category = msgCategory
      return input = this.message
    }
  }
  msg(){
    return input
  }
}