class BCS {
  constructor(config?: BCSConfig);

  /**
   * Encodes a Move value into a BCS buffer.
   *
   * @param value The Move value to encode.
   * @returns A BCS buffer.
   */
  encode(value: MoveValue): Buffer;

  /**
   * Decodes a Move value from a BCS buffer.
   *
   * @param buffer The BCS buffer to decode.
   * @returns A Move value.
   */
  decode(buffer: Buffer): MoveValue;
}
