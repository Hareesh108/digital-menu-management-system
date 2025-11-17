
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model DishCategory
 * 
 */
export type DishCategory = $Result.DefaultSelection<Prisma.$DishCategoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dishCategory`: Exposes CRUD operations for the **DishCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DishCategories
    * const dishCategories = await prisma.dishCategory.findMany()
    * ```
    */
  get dishCategory(): Prisma.DishCategoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Restaurant: 'Restaurant',
    Category: 'Category',
    Dish: 'Dish',
    DishCategory: 'DishCategory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "restaurant" | "category" | "dish" | "dishCategory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      DishCategory: {
        payload: Prisma.$DishCategoryPayload<ExtArgs>
        fields: Prisma.DishCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          findFirst: {
            args: Prisma.DishCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          findMany: {
            args: Prisma.DishCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>[]
          }
          create: {
            args: Prisma.DishCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          createMany: {
            args: Prisma.DishCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>[]
          }
          delete: {
            args: Prisma.DishCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          update: {
            args: Prisma.DishCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DishCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>[]
          }
          upsert: {
            args: Prisma.DishCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishCategoryPayload>
          }
          aggregate: {
            args: Prisma.DishCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishCategory>
          }
          groupBy: {
            args: Prisma.DishCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DishCategoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    restaurant?: RestaurantOmit
    category?: CategoryOmit
    dish?: DishOmit
    dishCategory?: DishCategoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    restaurants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | UserCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    categories: number
    dishes: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | RestaurantCountOutputTypeCountCategoriesArgs
    dishes?: boolean | RestaurantCountOutputTypeCountDishesArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountDishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    dishes: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dishes?: boolean | CategoryCountOutputTypeCountDishesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountDishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishCategoryWhereInput
  }


  /**
   * Count Type DishCountOutputType
   */

  export type DishCountOutputType = {
    categories: number
  }

  export type DishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | DishCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCountOutputType
     */
    select?: DishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishCategoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    country: string | null
    emailVerified: boolean | null
    verificationCode: string | null
    verificationCodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    country: string | null
    emailVerified: boolean | null
    verificationCode: string | null
    verificationCodeExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    country: number
    emailVerified: number
    verificationCode: number
    verificationCodeExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    country?: true
    emailVerified?: true
    verificationCode?: true
    verificationCodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    country?: true
    emailVerified?: true
    verificationCode?: true
    verificationCodeExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    country?: true
    emailVerified?: true
    verificationCode?: true
    verificationCodeExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    country: string
    emailVerified: boolean
    verificationCode: string | null
    verificationCodeExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    country?: boolean
    emailVerified?: boolean
    verificationCode?: boolean
    verificationCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurants?: boolean | User$restaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    country?: boolean
    emailVerified?: boolean
    verificationCode?: boolean
    verificationCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    country?: boolean
    emailVerified?: boolean
    verificationCode?: boolean
    verificationCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    country?: boolean
    emailVerified?: boolean
    verificationCode?: boolean
    verificationCodeExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "country" | "emailVerified" | "verificationCode" | "verificationCodeExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | User$restaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      restaurants: Prisma.$RestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      country: string
      emailVerified: boolean
      verificationCode: string | null
      verificationCodeExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurants<T extends User$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, User$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationCode: FieldRef<"User", 'String'>
    readonly verificationCodeExpires: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.restaurants
   */
  export type User$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    slug: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    slug: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    location: number
    slug: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    slug?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    slug?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    slug?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    location: string
    slug: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: RestaurantCountAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    slug?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    dishes?: boolean | Restaurant$dishesArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    slug?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    slug?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>

  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    slug?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "slug" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Restaurant$categoriesArgs<ExtArgs>
    dishes?: boolean | Restaurant$dishesArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RestaurantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      dishes: Prisma.$DishPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string
      slug: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Restaurant$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dishes<T extends Restaurant$dishesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$dishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly location: FieldRef<"Restaurant", 'String'>
    readonly slug: FieldRef<"Restaurant", 'String'>
    readonly ownerId: FieldRef<"Restaurant", 'String'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant createManyAndReturn
   */
  export type RestaurantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant updateManyAndReturn
   */
  export type RestaurantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.categories
   */
  export type Restaurant$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Restaurant.dishes
   */
  export type Restaurant$dishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    where?: DishWhereInput
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    cursor?: DishWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    dishes?: boolean | Category$dishesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    dishes?: boolean | Category$dishesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      dishes: Prisma.$DishCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dishes<T extends Category$dishesArgs<ExtArgs> = {}>(args?: Subset<T, Category$dishesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly restaurantId: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.dishes
   */
  export type Category$dishesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    where?: DishCategoryWhereInput
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    cursor?: DishCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishCategoryScalarFieldEnum | DishCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    spiceLevel: number | null
    price: number | null
  }

  export type DishSumAggregateOutputType = {
    spiceLevel: number | null
    price: number | null
  }

  export type DishMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    spiceLevel: number | null
    price: number | null
    isVeg: boolean | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    spiceLevel: number | null
    price: number | null
    isVeg: boolean | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    spiceLevel: number
    price: number
    isVeg: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    spiceLevel?: true
    price?: true
  }

  export type DishSumAggregateInputType = {
    spiceLevel?: true
    price?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    spiceLevel?: true
    price?: true
    isVeg?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    spiceLevel?: true
    price?: true
    isVeg?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    spiceLevel?: true
    price?: true
    isVeg?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    spiceLevel: number | null
    price: number | null
    isVeg: boolean | null
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    spiceLevel?: boolean
    price?: boolean
    isVeg?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    categories?: boolean | Dish$categoriesArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    spiceLevel?: boolean
    price?: boolean
    isVeg?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    spiceLevel?: boolean
    price?: boolean
    isVeg?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    spiceLevel?: boolean
    price?: boolean
    isVeg?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "spiceLevel" | "price" | "isVeg" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    categories?: boolean | Dish$categoriesArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      categories: Prisma.$DishCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      spiceLevel: number | null
      price: number | null
      isVeg: boolean | null
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Dish$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Dish$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dish model
   */
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'String'>
    readonly name: FieldRef<"Dish", 'String'>
    readonly description: FieldRef<"Dish", 'String'>
    readonly image: FieldRef<"Dish", 'String'>
    readonly spiceLevel: FieldRef<"Dish", 'Int'>
    readonly price: FieldRef<"Dish", 'Float'>
    readonly isVeg: FieldRef<"Dish", 'Boolean'>
    readonly restaurantId: FieldRef<"Dish", 'String'>
    readonly createdAt: FieldRef<"Dish", 'DateTime'>
    readonly updatedAt: FieldRef<"Dish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish.categories
   */
  export type Dish$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    where?: DishCategoryWhereInput
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    cursor?: DishCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DishCategoryScalarFieldEnum | DishCategoryScalarFieldEnum[]
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model DishCategory
   */

  export type AggregateDishCategory = {
    _count: DishCategoryCountAggregateOutputType | null
    _min: DishCategoryMinAggregateOutputType | null
    _max: DishCategoryMaxAggregateOutputType | null
  }

  export type DishCategoryMinAggregateOutputType = {
    id: string | null
    dishId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type DishCategoryMaxAggregateOutputType = {
    id: string | null
    dishId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type DishCategoryCountAggregateOutputType = {
    id: number
    dishId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type DishCategoryMinAggregateInputType = {
    id?: true
    dishId?: true
    categoryId?: true
    createdAt?: true
  }

  export type DishCategoryMaxAggregateInputType = {
    id?: true
    dishId?: true
    categoryId?: true
    createdAt?: true
  }

  export type DishCategoryCountAggregateInputType = {
    id?: true
    dishId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type DishCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishCategory to aggregate.
     */
    where?: DishCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishCategories to fetch.
     */
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DishCategories
    **/
    _count?: true | DishCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishCategoryMaxAggregateInputType
  }

  export type GetDishCategoryAggregateType<T extends DishCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDishCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishCategory[P]>
      : GetScalarType<T[P], AggregateDishCategory[P]>
  }




  export type DishCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishCategoryWhereInput
    orderBy?: DishCategoryOrderByWithAggregationInput | DishCategoryOrderByWithAggregationInput[]
    by: DishCategoryScalarFieldEnum[] | DishCategoryScalarFieldEnum
    having?: DishCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCategoryCountAggregateInputType | true
    _min?: DishCategoryMinAggregateInputType
    _max?: DishCategoryMaxAggregateInputType
  }

  export type DishCategoryGroupByOutputType = {
    id: string
    dishId: string
    categoryId: string
    createdAt: Date
    _count: DishCategoryCountAggregateOutputType | null
    _min: DishCategoryMinAggregateOutputType | null
    _max: DishCategoryMaxAggregateOutputType | null
  }

  type GetDishCategoryGroupByPayload<T extends DishCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DishCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DishCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishCategory"]>

  export type DishCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishCategory"]>

  export type DishCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dishId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishCategory"]>

  export type DishCategorySelectScalar = {
    id?: boolean
    dishId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type DishCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dishId" | "categoryId" | "createdAt", ExtArgs["result"]["dishCategory"]>
  export type DishCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }
  export type DishCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }
  export type DishCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }

  export type $DishCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DishCategory"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      dish: Prisma.$DishPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dishId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["dishCategory"]>
    composites: {}
  }

  type DishCategoryGetPayload<S extends boolean | null | undefined | DishCategoryDefaultArgs> = $Result.GetResult<Prisma.$DishCategoryPayload, S>

  type DishCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCategoryCountAggregateInputType | true
    }

  export interface DishCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DishCategory'], meta: { name: 'DishCategory' } }
    /**
     * Find zero or one DishCategory that matches the filter.
     * @param {DishCategoryFindUniqueArgs} args - Arguments to find a DishCategory
     * @example
     * // Get one DishCategory
     * const dishCategory = await prisma.dishCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishCategoryFindUniqueArgs>(args: SelectSubset<T, DishCategoryFindUniqueArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DishCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishCategoryFindUniqueOrThrowArgs} args - Arguments to find a DishCategory
     * @example
     * // Get one DishCategory
     * const dishCategory = await prisma.dishCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DishCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryFindFirstArgs} args - Arguments to find a DishCategory
     * @example
     * // Get one DishCategory
     * const dishCategory = await prisma.dishCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishCategoryFindFirstArgs>(args?: SelectSubset<T, DishCategoryFindFirstArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryFindFirstOrThrowArgs} args - Arguments to find a DishCategory
     * @example
     * // Get one DishCategory
     * const dishCategory = await prisma.dishCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DishCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DishCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DishCategories
     * const dishCategories = await prisma.dishCategory.findMany()
     * 
     * // Get first 10 DishCategories
     * const dishCategories = await prisma.dishCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishCategoryWithIdOnly = await prisma.dishCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishCategoryFindManyArgs>(args?: SelectSubset<T, DishCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DishCategory.
     * @param {DishCategoryCreateArgs} args - Arguments to create a DishCategory.
     * @example
     * // Create one DishCategory
     * const DishCategory = await prisma.dishCategory.create({
     *   data: {
     *     // ... data to create a DishCategory
     *   }
     * })
     * 
     */
    create<T extends DishCategoryCreateArgs>(args: SelectSubset<T, DishCategoryCreateArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DishCategories.
     * @param {DishCategoryCreateManyArgs} args - Arguments to create many DishCategories.
     * @example
     * // Create many DishCategories
     * const dishCategory = await prisma.dishCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCategoryCreateManyArgs>(args?: SelectSubset<T, DishCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DishCategories and returns the data saved in the database.
     * @param {DishCategoryCreateManyAndReturnArgs} args - Arguments to create many DishCategories.
     * @example
     * // Create many DishCategories
     * const dishCategory = await prisma.dishCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DishCategories and only return the `id`
     * const dishCategoryWithIdOnly = await prisma.dishCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DishCategory.
     * @param {DishCategoryDeleteArgs} args - Arguments to delete one DishCategory.
     * @example
     * // Delete one DishCategory
     * const DishCategory = await prisma.dishCategory.delete({
     *   where: {
     *     // ... filter to delete one DishCategory
     *   }
     * })
     * 
     */
    delete<T extends DishCategoryDeleteArgs>(args: SelectSubset<T, DishCategoryDeleteArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DishCategory.
     * @param {DishCategoryUpdateArgs} args - Arguments to update one DishCategory.
     * @example
     * // Update one DishCategory
     * const dishCategory = await prisma.dishCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishCategoryUpdateArgs>(args: SelectSubset<T, DishCategoryUpdateArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DishCategories.
     * @param {DishCategoryDeleteManyArgs} args - Arguments to filter DishCategories to delete.
     * @example
     * // Delete a few DishCategories
     * const { count } = await prisma.dishCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishCategoryDeleteManyArgs>(args?: SelectSubset<T, DishCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DishCategories
     * const dishCategory = await prisma.dishCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishCategoryUpdateManyArgs>(args: SelectSubset<T, DishCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishCategories and returns the data updated in the database.
     * @param {DishCategoryUpdateManyAndReturnArgs} args - Arguments to update many DishCategories.
     * @example
     * // Update many DishCategories
     * const dishCategory = await prisma.dishCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DishCategories and only return the `id`
     * const dishCategoryWithIdOnly = await prisma.dishCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DishCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DishCategory.
     * @param {DishCategoryUpsertArgs} args - Arguments to update or create a DishCategory.
     * @example
     * // Update or create a DishCategory
     * const dishCategory = await prisma.dishCategory.upsert({
     *   create: {
     *     // ... data to create a DishCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DishCategory we want to update
     *   }
     * })
     */
    upsert<T extends DishCategoryUpsertArgs>(args: SelectSubset<T, DishCategoryUpsertArgs<ExtArgs>>): Prisma__DishCategoryClient<$Result.GetResult<Prisma.$DishCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DishCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryCountArgs} args - Arguments to filter DishCategories to count.
     * @example
     * // Count the number of DishCategories
     * const count = await prisma.dishCategory.count({
     *   where: {
     *     // ... the filter for the DishCategories we want to count
     *   }
     * })
    **/
    count<T extends DishCategoryCountArgs>(
      args?: Subset<T, DishCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DishCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DishCategoryAggregateArgs>(args: Subset<T, DishCategoryAggregateArgs>): Prisma.PrismaPromise<GetDishCategoryAggregateType<T>>

    /**
     * Group by DishCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DishCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DishCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DishCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DishCategory model
   */
  readonly fields: DishCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DishCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dish<T extends DishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishDefaultArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DishCategory model
   */
  interface DishCategoryFieldRefs {
    readonly id: FieldRef<"DishCategory", 'String'>
    readonly dishId: FieldRef<"DishCategory", 'String'>
    readonly categoryId: FieldRef<"DishCategory", 'String'>
    readonly createdAt: FieldRef<"DishCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DishCategory findUnique
   */
  export type DishCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DishCategory to fetch.
     */
    where: DishCategoryWhereUniqueInput
  }

  /**
   * DishCategory findUniqueOrThrow
   */
  export type DishCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DishCategory to fetch.
     */
    where: DishCategoryWhereUniqueInput
  }

  /**
   * DishCategory findFirst
   */
  export type DishCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DishCategory to fetch.
     */
    where?: DishCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishCategories to fetch.
     */
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishCategories.
     */
    cursor?: DishCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishCategories.
     */
    distinct?: DishCategoryScalarFieldEnum | DishCategoryScalarFieldEnum[]
  }

  /**
   * DishCategory findFirstOrThrow
   */
  export type DishCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DishCategory to fetch.
     */
    where?: DishCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishCategories to fetch.
     */
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishCategories.
     */
    cursor?: DishCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishCategories.
     */
    distinct?: DishCategoryScalarFieldEnum | DishCategoryScalarFieldEnum[]
  }

  /**
   * DishCategory findMany
   */
  export type DishCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter, which DishCategories to fetch.
     */
    where?: DishCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishCategories to fetch.
     */
    orderBy?: DishCategoryOrderByWithRelationInput | DishCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DishCategories.
     */
    cursor?: DishCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishCategories.
     */
    skip?: number
    distinct?: DishCategoryScalarFieldEnum | DishCategoryScalarFieldEnum[]
  }

  /**
   * DishCategory create
   */
  export type DishCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DishCategory.
     */
    data: XOR<DishCategoryCreateInput, DishCategoryUncheckedCreateInput>
  }

  /**
   * DishCategory createMany
   */
  export type DishCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DishCategories.
     */
    data: DishCategoryCreateManyInput | DishCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishCategory createManyAndReturn
   */
  export type DishCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many DishCategories.
     */
    data: DishCategoryCreateManyInput | DishCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishCategory update
   */
  export type DishCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DishCategory.
     */
    data: XOR<DishCategoryUpdateInput, DishCategoryUncheckedUpdateInput>
    /**
     * Choose, which DishCategory to update.
     */
    where: DishCategoryWhereUniqueInput
  }

  /**
   * DishCategory updateMany
   */
  export type DishCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DishCategories.
     */
    data: XOR<DishCategoryUpdateManyMutationInput, DishCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DishCategories to update
     */
    where?: DishCategoryWhereInput
    /**
     * Limit how many DishCategories to update.
     */
    limit?: number
  }

  /**
   * DishCategory updateManyAndReturn
   */
  export type DishCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * The data used to update DishCategories.
     */
    data: XOR<DishCategoryUpdateManyMutationInput, DishCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DishCategories to update
     */
    where?: DishCategoryWhereInput
    /**
     * Limit how many DishCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DishCategory upsert
   */
  export type DishCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DishCategory to update in case it exists.
     */
    where: DishCategoryWhereUniqueInput
    /**
     * In case the DishCategory found by the `where` argument doesn't exist, create a new DishCategory with this data.
     */
    create: XOR<DishCategoryCreateInput, DishCategoryUncheckedCreateInput>
    /**
     * In case the DishCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishCategoryUpdateInput, DishCategoryUncheckedUpdateInput>
  }

  /**
   * DishCategory delete
   */
  export type DishCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
    /**
     * Filter which DishCategory to delete.
     */
    where: DishCategoryWhereUniqueInput
  }

  /**
   * DishCategory deleteMany
   */
  export type DishCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishCategories to delete
     */
    where?: DishCategoryWhereInput
    /**
     * Limit how many DishCategories to delete.
     */
    limit?: number
  }

  /**
   * DishCategory without action
   */
  export type DishCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCategory
     */
    select?: DishCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishCategory
     */
    omit?: DishCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishCategoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    country: 'country',
    emailVerified: 'emailVerified',
    verificationCode: 'verificationCode',
    verificationCodeExpires: 'verificationCodeExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    slug: 'slug',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    spiceLevel: 'spiceLevel',
    price: 'price',
    isVeg: 'isVeg',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const DishCategoryScalarFieldEnum: {
    id: 'id',
    dishId: 'dishId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type DishCategoryScalarFieldEnum = (typeof DishCategoryScalarFieldEnum)[keyof typeof DishCategoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationCodeExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    restaurants?: RestaurantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    emailVerified?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationCodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurants?: RestaurantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    verificationCode?: StringNullableFilter<"User"> | string | null
    verificationCodeExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    restaurants?: RestaurantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    emailVerified?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationCodeExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationCodeExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
    slug?: StringFilter<"Restaurant"> | string
    ownerId?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    categories?: CategoryListRelationFilter
    dishes?: DishListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoryOrderByRelationAggregateInput
    dishes?: DishOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
    ownerId?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    categories?: CategoryListRelationFilter
    dishes?: DishListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "slug">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    location?: StringWithAggregatesFilter<"Restaurant"> | string
    slug?: StringWithAggregatesFilter<"Restaurant"> | string
    ownerId?: StringWithAggregatesFilter<"Restaurant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    restaurantId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    dishes?: DishCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    dishes?: DishCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    restaurantId_name?: CategoryRestaurantIdNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    restaurantId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    dishes?: DishCategoryListRelationFilter
  }, "id" | "restaurantId_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    restaurantId?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: StringFilter<"Dish"> | string
    name?: StringFilter<"Dish"> | string
    description?: StringFilter<"Dish"> | string
    image?: StringNullableFilter<"Dish"> | string | null
    spiceLevel?: IntNullableFilter<"Dish"> | number | null
    price?: FloatNullableFilter<"Dish"> | number | null
    isVeg?: BoolNullableFilter<"Dish"> | boolean | null
    restaurantId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    categories?: DishCategoryListRelationFilter
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    spiceLevel?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    isVeg?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    categories?: DishCategoryOrderByRelationAggregateInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    name?: StringFilter<"Dish"> | string
    description?: StringFilter<"Dish"> | string
    image?: StringNullableFilter<"Dish"> | string | null
    spiceLevel?: IntNullableFilter<"Dish"> | number | null
    price?: FloatNullableFilter<"Dish"> | number | null
    isVeg?: BoolNullableFilter<"Dish"> | boolean | null
    restaurantId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    categories?: DishCategoryListRelationFilter
  }, "id">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    spiceLevel?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    isVeg?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dish"> | string
    name?: StringWithAggregatesFilter<"Dish"> | string
    description?: StringWithAggregatesFilter<"Dish"> | string
    image?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    spiceLevel?: IntNullableWithAggregatesFilter<"Dish"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Dish"> | number | null
    isVeg?: BoolNullableWithAggregatesFilter<"Dish"> | boolean | null
    restaurantId?: StringWithAggregatesFilter<"Dish"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
  }

  export type DishCategoryWhereInput = {
    AND?: DishCategoryWhereInput | DishCategoryWhereInput[]
    OR?: DishCategoryWhereInput[]
    NOT?: DishCategoryWhereInput | DishCategoryWhereInput[]
    id?: StringFilter<"DishCategory"> | string
    dishId?: StringFilter<"DishCategory"> | string
    categoryId?: StringFilter<"DishCategory"> | string
    createdAt?: DateTimeFilter<"DishCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
  }

  export type DishCategoryOrderByWithRelationInput = {
    id?: SortOrder
    dishId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    dish?: DishOrderByWithRelationInput
  }

  export type DishCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dishId_categoryId?: DishCategoryDishIdCategoryIdCompoundUniqueInput
    AND?: DishCategoryWhereInput | DishCategoryWhereInput[]
    OR?: DishCategoryWhereInput[]
    NOT?: DishCategoryWhereInput | DishCategoryWhereInput[]
    dishId?: StringFilter<"DishCategory"> | string
    categoryId?: StringFilter<"DishCategory"> | string
    createdAt?: DateTimeFilter<"DishCategory"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
  }, "id" | "dishId_categoryId">

  export type DishCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    dishId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: DishCategoryCountOrderByAggregateInput
    _max?: DishCategoryMaxOrderByAggregateInput
    _min?: DishCategoryMinOrderByAggregateInput
  }

  export type DishCategoryScalarWhereWithAggregatesInput = {
    AND?: DishCategoryScalarWhereWithAggregatesInput | DishCategoryScalarWhereWithAggregatesInput[]
    OR?: DishCategoryScalarWhereWithAggregatesInput[]
    NOT?: DishCategoryScalarWhereWithAggregatesInput | DishCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DishCategory"> | string
    dishId?: StringWithAggregatesFilter<"DishCategory"> | string
    categoryId?: StringWithAggregatesFilter<"DishCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DishCategory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    country: string
    emailVerified?: boolean
    verificationCode?: string | null
    verificationCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurants?: RestaurantCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    country: string
    emailVerified?: boolean
    verificationCode?: string | null
    verificationCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    country: string
    emailVerified?: boolean
    verificationCode?: string | null
    verificationCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    dishes?: DishCreateNestedManyWithoutRestaurantInput
    owner: UserCreateNestedOneWithoutRestaurantsInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    location: string
    slug: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    dishes?: DishUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    dishes?: DishUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    dishes?: DishUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    location: string
    slug: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
    dishes?: DishCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
    dishes?: DishCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutDishesInput
    categories?: DishCategoryCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DishCategoryUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutDishesNestedInput
    categories?: DishCategoryUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DishCategoryUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishCreateManyInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutDishesInput
    dish: DishCreateNestedOneWithoutCategoriesInput
  }

  export type DishCategoryUncheckedCreateInput = {
    id?: string
    dishId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type DishCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDishesNestedInput
    dish?: DishUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type DishCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryCreateManyInput = {
    id?: string
    dishId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type DishCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    emailVerified?: SortOrder
    verificationCode?: SortOrder
    verificationCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    emailVerified?: SortOrder
    verificationCode?: SortOrder
    verificationCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    country?: SortOrder
    emailVerified?: SortOrder
    verificationCode?: SortOrder
    verificationCodeExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type DishListRelationFilter = {
    every?: DishWhereInput
    some?: DishWhereInput
    none?: DishWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    slug?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type DishCategoryListRelationFilter = {
    every?: DishCategoryWhereInput
    some?: DishCategoryWhereInput
    none?: DishCategoryWhereInput
  }

  export type DishCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryRestaurantIdNameCompoundUniqueInput = {
    restaurantId: string
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    spiceLevel?: SortOrder
    price?: SortOrder
    isVeg?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    spiceLevel?: SortOrder
    price?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    spiceLevel?: SortOrder
    price?: SortOrder
    isVeg?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    spiceLevel?: SortOrder
    price?: SortOrder
    isVeg?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    spiceLevel?: SortOrder
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type DishScalarRelationFilter = {
    is?: DishWhereInput
    isNot?: DishWhereInput
  }

  export type DishCategoryDishIdCategoryIdCompoundUniqueInput = {
    dishId: string
    categoryId: string
  }

  export type DishCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type DishCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type DishCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    dishId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type RestaurantCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RestaurantUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutOwnerInput | RestaurantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutOwnerInput | RestaurantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutOwnerInput | RestaurantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutOwnerInput | RestaurantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutOwnerInput | RestaurantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutOwnerInput | RestaurantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type DishCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput> | DishCreateWithoutRestaurantInput[] | DishUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: DishCreateOrConnectWithoutRestaurantInput | DishCreateOrConnectWithoutRestaurantInput[]
    createMany?: DishCreateManyRestaurantInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type DishUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput> | DishCreateWithoutRestaurantInput[] | DishUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: DishCreateOrConnectWithoutRestaurantInput | DishCreateOrConnectWithoutRestaurantInput[]
    createMany?: DishCreateManyRestaurantInputEnvelope
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DishUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput> | DishCreateWithoutRestaurantInput[] | DishUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: DishCreateOrConnectWithoutRestaurantInput | DishCreateOrConnectWithoutRestaurantInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutRestaurantInput | DishUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: DishCreateManyRestaurantInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutRestaurantInput | DishUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: DishUpdateManyWithWhereWithoutRestaurantInput | DishUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutRestaurantsNestedInput = {
    create?: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRestaurantsInput
    upsert?: UserUpsertWithoutRestaurantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRestaurantsInput, UserUpdateWithoutRestaurantsInput>, UserUncheckedUpdateWithoutRestaurantsInput>
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput> | CategoryCreateWithoutRestaurantInput[] | CategoryUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantInput | CategoryCreateOrConnectWithoutRestaurantInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutRestaurantInput | CategoryUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: CategoryCreateManyRestaurantInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutRestaurantInput | CategoryUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutRestaurantInput | CategoryUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type DishUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput> | DishCreateWithoutRestaurantInput[] | DishUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: DishCreateOrConnectWithoutRestaurantInput | DishCreateOrConnectWithoutRestaurantInput[]
    upsert?: DishUpsertWithWhereUniqueWithoutRestaurantInput | DishUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: DishCreateManyRestaurantInputEnvelope
    set?: DishWhereUniqueInput | DishWhereUniqueInput[]
    disconnect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    delete?: DishWhereUniqueInput | DishWhereUniqueInput[]
    connect?: DishWhereUniqueInput | DishWhereUniqueInput[]
    update?: DishUpdateWithWhereUniqueWithoutRestaurantInput | DishUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: DishUpdateManyWithWhereWithoutRestaurantInput | DishUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: DishScalarWhereInput | DishScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type DishCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput> | DishCategoryCreateWithoutCategoryInput[] | DishCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutCategoryInput | DishCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: DishCategoryCreateManyCategoryInputEnvelope
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
  }

  export type DishCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput> | DishCategoryCreateWithoutCategoryInput[] | DishCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutCategoryInput | DishCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: DishCategoryCreateManyCategoryInputEnvelope
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutCategoriesInput
    upsert?: RestaurantUpsertWithoutCategoriesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutCategoriesInput, RestaurantUpdateWithoutCategoriesInput>, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type DishCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput> | DishCategoryCreateWithoutCategoryInput[] | DishCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutCategoryInput | DishCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: DishCategoryUpsertWithWhereUniqueWithoutCategoryInput | DishCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DishCategoryCreateManyCategoryInputEnvelope
    set?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    disconnect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    delete?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    update?: DishCategoryUpdateWithWhereUniqueWithoutCategoryInput | DishCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DishCategoryUpdateManyWithWhereWithoutCategoryInput | DishCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
  }

  export type DishCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput> | DishCategoryCreateWithoutCategoryInput[] | DishCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutCategoryInput | DishCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: DishCategoryUpsertWithWhereUniqueWithoutCategoryInput | DishCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: DishCategoryCreateManyCategoryInputEnvelope
    set?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    disconnect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    delete?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    update?: DishCategoryUpdateWithWhereUniqueWithoutCategoryInput | DishCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: DishCategoryUpdateManyWithWhereWithoutCategoryInput | DishCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutDishesInput = {
    create?: XOR<RestaurantCreateWithoutDishesInput, RestaurantUncheckedCreateWithoutDishesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutDishesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type DishCategoryCreateNestedManyWithoutDishInput = {
    create?: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput> | DishCategoryCreateWithoutDishInput[] | DishCategoryUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutDishInput | DishCategoryCreateOrConnectWithoutDishInput[]
    createMany?: DishCategoryCreateManyDishInputEnvelope
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
  }

  export type DishCategoryUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput> | DishCategoryCreateWithoutDishInput[] | DishCategoryUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutDishInput | DishCategoryCreateOrConnectWithoutDishInput[]
    createMany?: DishCategoryCreateManyDishInputEnvelope
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RestaurantUpdateOneRequiredWithoutDishesNestedInput = {
    create?: XOR<RestaurantCreateWithoutDishesInput, RestaurantUncheckedCreateWithoutDishesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutDishesInput
    upsert?: RestaurantUpsertWithoutDishesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutDishesInput, RestaurantUpdateWithoutDishesInput>, RestaurantUncheckedUpdateWithoutDishesInput>
  }

  export type DishCategoryUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput> | DishCategoryCreateWithoutDishInput[] | DishCategoryUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutDishInput | DishCategoryCreateOrConnectWithoutDishInput[]
    upsert?: DishCategoryUpsertWithWhereUniqueWithoutDishInput | DishCategoryUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishCategoryCreateManyDishInputEnvelope
    set?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    disconnect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    delete?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    update?: DishCategoryUpdateWithWhereUniqueWithoutDishInput | DishCategoryUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishCategoryUpdateManyWithWhereWithoutDishInput | DishCategoryUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
  }

  export type DishCategoryUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput> | DishCategoryCreateWithoutDishInput[] | DishCategoryUncheckedCreateWithoutDishInput[]
    connectOrCreate?: DishCategoryCreateOrConnectWithoutDishInput | DishCategoryCreateOrConnectWithoutDishInput[]
    upsert?: DishCategoryUpsertWithWhereUniqueWithoutDishInput | DishCategoryUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: DishCategoryCreateManyDishInputEnvelope
    set?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    disconnect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    delete?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    connect?: DishCategoryWhereUniqueInput | DishCategoryWhereUniqueInput[]
    update?: DishCategoryUpdateWithWhereUniqueWithoutDishInput | DishCategoryUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: DishCategoryUpdateManyWithWhereWithoutDishInput | DishCategoryUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutDishesInput = {
    create?: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDishesInput
    connect?: CategoryWhereUniqueInput
  }

  export type DishCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<DishCreateWithoutCategoriesInput, DishUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DishCreateOrConnectWithoutCategoriesInput
    connect?: DishWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutDishesNestedInput = {
    create?: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutDishesInput
    upsert?: CategoryUpsertWithoutDishesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutDishesInput, CategoryUpdateWithoutDishesInput>, CategoryUncheckedUpdateWithoutDishesInput>
  }

  export type DishUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<DishCreateWithoutCategoriesInput, DishUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: DishCreateOrConnectWithoutCategoriesInput
    upsert?: DishUpsertWithoutCategoriesInput
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutCategoriesInput, DishUpdateWithoutCategoriesInput>, DishUncheckedUpdateWithoutCategoriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RestaurantCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    dishes?: DishCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
    dishes?: DishUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput>
  }

  export type RestaurantCreateManyOwnerInputEnvelope = {
    data: RestaurantCreateManyOwnerInput | RestaurantCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutOwnerInput, RestaurantUncheckedUpdateWithoutOwnerInput>
    create: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutOwnerInput, RestaurantUncheckedUpdateWithoutOwnerInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutOwnerInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    location?: StringFilter<"Restaurant"> | string
    slug?: StringFilter<"Restaurant"> | string
    ownerId?: StringFilter<"Restaurant"> | string
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
  }

  export type CategoryCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryCreateManyRestaurantInputEnvelope = {
    data: CategoryCreateManyRestaurantInput | CategoryCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type DishCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DishCategoryCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: DishCategoryUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishCreateOrConnectWithoutRestaurantInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput>
  }

  export type DishCreateManyRestaurantInputEnvelope = {
    data: DishCreateManyRestaurantInput | DishCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRestaurantsInput = {
    id?: string
    email: string
    name: string
    country: string
    emailVerified?: boolean
    verificationCode?: string | null
    verificationCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRestaurantsInput = {
    id?: string
    email: string
    name: string
    country: string
    emailVerified?: boolean
    verificationCode?: string | null
    verificationCodeExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRestaurantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
    create: XOR<CategoryCreateWithoutRestaurantInput, CategoryUncheckedCreateWithoutRestaurantInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutRestaurantInput, CategoryUncheckedUpdateWithoutRestaurantInput>
  }

  export type CategoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    restaurantId?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type DishUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: DishWhereUniqueInput
    update: XOR<DishUpdateWithoutRestaurantInput, DishUncheckedUpdateWithoutRestaurantInput>
    create: XOR<DishCreateWithoutRestaurantInput, DishUncheckedCreateWithoutRestaurantInput>
  }

  export type DishUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: DishWhereUniqueInput
    data: XOR<DishUpdateWithoutRestaurantInput, DishUncheckedUpdateWithoutRestaurantInput>
  }

  export type DishUpdateManyWithWhereWithoutRestaurantInput = {
    where: DishScalarWhereInput
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type DishScalarWhereInput = {
    AND?: DishScalarWhereInput | DishScalarWhereInput[]
    OR?: DishScalarWhereInput[]
    NOT?: DishScalarWhereInput | DishScalarWhereInput[]
    id?: StringFilter<"Dish"> | string
    name?: StringFilter<"Dish"> | string
    description?: StringFilter<"Dish"> | string
    image?: StringNullableFilter<"Dish"> | string | null
    spiceLevel?: IntNullableFilter<"Dish"> | number | null
    price?: FloatNullableFilter<"Dish"> | number | null
    isVeg?: BoolNullableFilter<"Dish"> | boolean | null
    restaurantId?: StringFilter<"Dish"> | string
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    updatedAt?: DateTimeFilter<"Dish"> | Date | string
  }

  export type UserUpsertWithoutRestaurantsInput = {
    update: XOR<UserUpdateWithoutRestaurantsInput, UserUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<UserCreateWithoutRestaurantsInput, UserUncheckedCreateWithoutRestaurantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRestaurantsInput, UserUncheckedUpdateWithoutRestaurantsInput>
  }

  export type UserUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationCodeExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateWithoutCategoriesInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishCreateNestedManyWithoutRestaurantInput
    owner: UserCreateNestedOneWithoutRestaurantsInput
  }

  export type RestaurantUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    location: string
    slug: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dishes?: DishUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutCategoriesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
  }

  export type DishCategoryCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    dish: DishCreateNestedOneWithoutCategoriesInput
  }

  export type DishCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    dishId: string
    createdAt?: Date | string
  }

  export type DishCategoryCreateOrConnectWithoutCategoryInput = {
    where: DishCategoryWhereUniqueInput
    create: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type DishCategoryCreateManyCategoryInputEnvelope = {
    data: DishCategoryCreateManyCategoryInput | DishCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutCategoriesInput = {
    update: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
    create: XOR<RestaurantCreateWithoutCategoriesInput, RestaurantUncheckedCreateWithoutCategoriesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutCategoriesInput, RestaurantUncheckedUpdateWithoutCategoriesInput>
  }

  export type RestaurantUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type DishCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: DishCategoryWhereUniqueInput
    update: XOR<DishCategoryUpdateWithoutCategoryInput, DishCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<DishCategoryCreateWithoutCategoryInput, DishCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type DishCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: DishCategoryWhereUniqueInput
    data: XOR<DishCategoryUpdateWithoutCategoryInput, DishCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type DishCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: DishCategoryScalarWhereInput
    data: XOR<DishCategoryUpdateManyMutationInput, DishCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type DishCategoryScalarWhereInput = {
    AND?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
    OR?: DishCategoryScalarWhereInput[]
    NOT?: DishCategoryScalarWhereInput | DishCategoryScalarWhereInput[]
    id?: StringFilter<"DishCategory"> | string
    dishId?: StringFilter<"DishCategory"> | string
    categoryId?: StringFilter<"DishCategory"> | string
    createdAt?: DateTimeFilter<"DishCategory"> | Date | string
  }

  export type RestaurantCreateWithoutDishesInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutRestaurantInput
    owner: UserCreateNestedOneWithoutRestaurantsInput
  }

  export type RestaurantUncheckedCreateWithoutDishesInput = {
    id?: string
    name: string
    location: string
    slug: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutDishesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutDishesInput, RestaurantUncheckedCreateWithoutDishesInput>
  }

  export type DishCategoryCreateWithoutDishInput = {
    id?: string
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutDishesInput
  }

  export type DishCategoryUncheckedCreateWithoutDishInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type DishCategoryCreateOrConnectWithoutDishInput = {
    where: DishCategoryWhereUniqueInput
    create: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput>
  }

  export type DishCategoryCreateManyDishInputEnvelope = {
    data: DishCategoryCreateManyDishInput | DishCategoryCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutDishesInput = {
    update: XOR<RestaurantUpdateWithoutDishesInput, RestaurantUncheckedUpdateWithoutDishesInput>
    create: XOR<RestaurantCreateWithoutDishesInput, RestaurantUncheckedCreateWithoutDishesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutDishesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutDishesInput, RestaurantUncheckedUpdateWithoutDishesInput>
  }

  export type RestaurantUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneRequiredWithoutRestaurantsNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type DishCategoryUpsertWithWhereUniqueWithoutDishInput = {
    where: DishCategoryWhereUniqueInput
    update: XOR<DishCategoryUpdateWithoutDishInput, DishCategoryUncheckedUpdateWithoutDishInput>
    create: XOR<DishCategoryCreateWithoutDishInput, DishCategoryUncheckedCreateWithoutDishInput>
  }

  export type DishCategoryUpdateWithWhereUniqueWithoutDishInput = {
    where: DishCategoryWhereUniqueInput
    data: XOR<DishCategoryUpdateWithoutDishInput, DishCategoryUncheckedUpdateWithoutDishInput>
  }

  export type DishCategoryUpdateManyWithWhereWithoutDishInput = {
    where: DishCategoryScalarWhereInput
    data: XOR<DishCategoryUpdateManyMutationInput, DishCategoryUncheckedUpdateManyWithoutDishInput>
  }

  export type CategoryCreateWithoutDishesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutDishesInput = {
    id?: string
    name: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutDishesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
  }

  export type DishCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutDishesInput
  }

  export type DishUncheckedCreateWithoutCategoriesInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishCreateOrConnectWithoutCategoriesInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutCategoriesInput, DishUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryUpsertWithoutDishesInput = {
    update: XOR<CategoryUpdateWithoutDishesInput, CategoryUncheckedUpdateWithoutDishesInput>
    create: XOR<CategoryCreateWithoutDishesInput, CategoryUncheckedCreateWithoutDishesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutDishesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutDishesInput, CategoryUncheckedUpdateWithoutDishesInput>
  }

  export type CategoryUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutDishesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUpsertWithoutCategoriesInput = {
    update: XOR<DishUpdateWithoutCategoriesInput, DishUncheckedUpdateWithoutCategoriesInput>
    create: XOR<DishCreateWithoutCategoriesInput, DishUncheckedCreateWithoutCategoriesInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutCategoriesInput, DishUncheckedUpdateWithoutCategoriesInput>
  }

  export type DishUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutDishesNestedInput
  }

  export type DishUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateManyOwnerInput = {
    id?: string
    name: string
    location: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RestaurantUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutRestaurantNestedInput
    dishes?: DishUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutRestaurantNestedInput
    dishes?: DishUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyRestaurantInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishCreateManyRestaurantInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    spiceLevel?: number | null
    price?: number | null
    isVeg?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dishes?: DishCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DishCategoryUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: DishCategoryUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    spiceLevel?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    isVeg?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryCreateManyCategoryInput = {
    id?: string
    dishId: string
    createdAt?: Date | string
  }

  export type DishCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dish?: DishUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type DishCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryCreateManyDishInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type DishCategoryUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutDishesNestedInput
  }

  export type DishCategoryUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCategoryUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}