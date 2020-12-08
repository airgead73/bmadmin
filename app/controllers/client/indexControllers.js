const asyncHandler = require('../../middleware/handleAsync');

/**
 * @route   GET /
 * @desc    view dashboard
 * @access  private
 */
exports.dashboard = asyncHandler(async function(req, res, next) {
  return res
    .status(200)
    .render('pages/index', {
      success: true,
      title: 'dashboard'
    });

});

/**
 * @route   GET /
 * @desc    view dashboard
 * @access  private
 */
exports.dashboard = asyncHandler(async function(req, res, next) {
  return res
    .status(200)
    .render('pages/signin', {
      success: true,
      title: 'signin'
    });

});