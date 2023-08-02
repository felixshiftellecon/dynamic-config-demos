import { OrbDisplayMeta } from '../types/Orb.types';
export interface OrbDefinition {
    /**
     * The name of this orb.
     */
    name: string;
    /**
     * The namespace this orb belongs to.
     */
    namespace: string;
    /**
     * The version of this orb.
     */
    version: string;
    description?: string;
    /**
     * The display metadata for this orb.
     */
    display?: OrbDisplayMeta;
}
//# sourceMappingURL=OrbDefinition.d.ts.map