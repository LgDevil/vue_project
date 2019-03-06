const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('不能输入空值'));
  } else {
    callback();
  }
};

export {validatePass}
