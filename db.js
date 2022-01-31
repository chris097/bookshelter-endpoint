const Pool = require('pg').Pool;

const pool = new Pool({
  user: "vrkiibwqjatdls",
  host: "ec2-3-217-216-13.compute-1.amazonaws.com",
  port: 5432,
  password: 'a5e1c90dc03bd35c91f2a22a61c1079f7800dae71f590af726e62d96b9d2f9aa',
  database: "dbu664sisfdv9i"
});

module.exports = pool;
