// This file is auto-generated by @hey-api/openapi-ts

export const ResponseCountDTOSchema = {
  type: 'object',
  properties: {
    count: {
      type: 'number',
    },
  },
  required: ['count'],
} as const;

export const ResponseUserDTOSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'phone'],
} as const;

export const ResponseUsersDTOSchema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResponseUserDTO',
      },
    },
  },
  required: ['users'],
} as const;

export const RequestSignupDTOSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'phone', 'password'],
} as const;

export const ResponseAuthorizedUserDTOSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
  },
  required: ['id', 'name', 'email', 'phone'],
} as const;

export const ResponseLoggedInDTOSchema = {
  type: 'object',
  properties: {
    user: {
      $ref: '#/components/schemas/ResponseAuthorizedUserDTO',
    },
    accessToken: {
      type: 'string',
    },
  },
  required: ['user', 'accessToken'],
} as const;

export const RequestLoginDTOSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
  },
  required: ['email', 'password'],
} as const;
