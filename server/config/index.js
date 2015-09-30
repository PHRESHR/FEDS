export default {
  development: {
    isProduction: false,
    port: 3333,
    app: {
      name: 'ExpressJS Example Development'
    }
  },
  production: {
    isProduction: true,
    port: process.env.PORT || 8080,
    app: {
      name: 'ExpressJS Example Production'
    }
  }
}[process.env.NODE_ENV || 'development'];
