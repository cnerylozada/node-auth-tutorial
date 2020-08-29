exports.HTTP_STATUS = {
  ok: 200,
  created: 201,
  accepted: 202,
  no_content: 204,
  found: 302,
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
};

exports.validateEmail = (email) =>
  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
