export const registerSchema = {
  type: 'object',
  required: ['email', 'password', 'name', 'department'],
  properties: {
    email: {
      type: 'string',
      format: 'email',
      minLength: 5,
      maxLength: 255
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 128
    },
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 255
    },
    department: {
      type: 'string',
      minLength: 2,
      maxLength: 255
    }
  }
};

export const loginSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 1
    }
  }
};
