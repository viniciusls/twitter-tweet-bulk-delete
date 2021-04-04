class InvalidFileExtensionError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message); // (1)
    this.name = "InvalidFileExtensionError"; //
  }
}

export { InvalidFileExtensionError };
