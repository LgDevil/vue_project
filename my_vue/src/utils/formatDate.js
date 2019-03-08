
const formatDate = (_date) =>{
  let year = _date.getFullYear();
  let month = _date.getMonth()+1;
  if(month.toString().length == 1){
    month = "0" + month.toString();
  }
  let date = _date.getDate();
  if(date.toString().length == 1){
    date = "0" + date.toString();
  }
  return year + "-"+month+"-"+date;
}

export {formatDate}
