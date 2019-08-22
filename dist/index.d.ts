import { IntrospectionQuery } from "graphql";
import { IMocks } from "graphql-tools";
interface MockGraphQLOptions<AllOperations extends Record<string, any>> {
    schema: string | string[] | IntrospectionQuery;
    name?: string;
    mocks?: IMocks;
    endpoint?: string;
    operations?: Partial<AllOperations>;
    delay?: number;
}
interface SetOperationsOpts<AllOperations> {
    name?: string;
    endpoint?: string;
    operations?: Partial<AllOperations>;
    delay?: number;
}
declare global {
    namespace Cypress {
        interface Chainable {
            mockGraphql<AllOperations = any>(options?: MockGraphQLOptions<AllOperations>): Cypress.Chainable;
            mockGraphqlOps<AllOperations = any>(options?: SetOperationsOpts<AllOperations>): Cypress.Chainable;
        }
    }
}
export {};
//# sourceMappingURL=index.d.ts.map