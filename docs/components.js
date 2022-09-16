export default {
  components: {
    schemas: {
      Job: {
        technology: {
          type: 'string',
          description: 'must be a string and is required',
          example: 'React Native',
        },
        type: {
          type: 'string',
          description: 'must be a string and is required',
          example: 'back-end',
        },
        location: {
          type: 'string',
          description: 'must be a string and is required',
          example: 'Brazil',
        },
        jobs: {
          type: 'int',
          description: 'must be a int and is required',
          example: 1000,
        },
      },
    },
  },
};
