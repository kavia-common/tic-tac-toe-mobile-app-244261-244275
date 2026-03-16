/**
 * Controller for extensibility/testing endpoint.
 * Provides a stub endpoint for future app-backend integration/extensibility.
 */

class ExtController {
  // PUBLIC_INTERFACE
  /**
   * Stub GET endpoint handler.
   * Returns a static response for integration or connectivity checks.
   */
  stub(req, res) {
    return res.status(200).json({
      status: 'ok',
      message: 'Extensibility endpoint reached. Ready for integration.',
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = new ExtController();
