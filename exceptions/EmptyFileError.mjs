class EmptyFileError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message); // (1)
    this.name = "EmptyFileError"; //
  }
}

export { EmptyFileError };
