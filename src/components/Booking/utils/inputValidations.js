export const name_validation = {
    name: 'name',
    label: '예약자명',
    type: 'text',
    multiType : false,
    id: 'name',
    placeholder: '아기사자',
    validation: {
      required: {
        value: true,
        message: '입력해 주세요',
      },
      maxLength: {
        value: 30,
        message: '이름이 너무 길어요',
      },
    },
  }
  
  export const desc_validation = {
    name: 'description',
    label: '비고',
    multiline: true,
    id: 'description',
    placeholder: '전달사항이 있다면 작성해 주세요.',
    validation: {
      required: {
        value: false,
        message: '입력해 주세요',
      },
      maxLength: {
        value: 200,
        message: '100자까지 작성 가능합니다.',
      },
    },
  }
  
  export const password_validation = {
    name: 'password',
    label: '비밀번호',
    type: 'password',
    multiType : true,
    id: 'password',
    placeholder: '0000',
    validation: {
      required: {
        value: true,
        message: '입력해 주세요',
      },
      minLength: {
        value: 4,
        message: '최소 4자리를 입력해 주세요',
      },
    },
  }
  
  export const num_validation = {
    name: 'num',
    label: '예약인원',
    type: 'number',
    multiType : false,
    id: 'num',
    placeholder: '0',
    validation: {
      required: {
        value: true,
        message: '입력해 주세요',
      },
      min: {
        value: 0,
        message: '음수는 입력할 수 없습니다',
      },
    },
  }
  
  export const email_validation = {
    name: 'email',
    label: '전화번호',
    type: 'email',
    multiType : false,
    id: 'email',
    placeholder: '010-1234-5678',
    validation: {
      required: {
        value: true,
        message: '입력해 주세요',
      },
      pattern: {
        value: /^[\d\-]+$/,
        message: '010-1234-5678 형식으로 입력해 주세요',
      },
    },
  }