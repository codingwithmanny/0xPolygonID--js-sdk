import { IdPosition, MerklizedRootPosition } from '@iden3/js-iden3-core';
import { SchemaMetadata } from '../schema-processor';
import { SubjectPosition } from '../verifiable';

/**
 * Determines subject position
 *
 * @param {IdPosition} idPosition - index / none / value
 * @returns {SubjectPosition}
 */
export const subjectPositionIndex = (idPosition: IdPosition): SubjectPosition => {
  switch (idPosition) {
    case IdPosition.Index:
      return SubjectPosition.Index;
    case IdPosition.Value:
      return SubjectPosition.Value;
    default:
      return SubjectPosition.None;
  }
};

/**
 * Returns merklized root position based on schema serialization metadata and expected position
 *
 * @param {SchemaMetadata} [metadata] - schema metadata
 * @param {MerklizedRootPosition} [position] - expected mt root position
 * @returns {MerklizedRootPosition}
 */
export const defineMerklizedRootPosition = (
  metadata?: SchemaMetadata,
  position?: MerklizedRootPosition
): MerklizedRootPosition => {
  if (!metadata && !metadata.serialization) {
    return MerklizedRootPosition.None;
  }

  if (position != null && position !== MerklizedRootPosition.None) {
    return position;
  }

  return MerklizedRootPosition.Index;
};
