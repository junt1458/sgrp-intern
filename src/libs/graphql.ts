import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  date: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "managers" */
export type Managers = {
  __typename?: 'managers';
  auth0_uid: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  manager_id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "managers" */
export type Managers_Aggregate = {
  __typename?: 'managers_aggregate';
  aggregate?: Maybe<Managers_Aggregate_Fields>;
  nodes: Array<Managers>;
};

/** aggregate fields of "managers" */
export type Managers_Aggregate_Fields = {
  __typename?: 'managers_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Managers_Max_Fields>;
  min?: Maybe<Managers_Min_Fields>;
};

/** aggregate fields of "managers" */
export type Managers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Managers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "managers". All fields are combined with a logical 'AND'. */
export type Managers_Bool_Exp = {
  _and?: InputMaybe<Array<Managers_Bool_Exp>>;
  _not?: InputMaybe<Managers_Bool_Exp>;
  _or?: InputMaybe<Array<Managers_Bool_Exp>>;
  auth0_uid?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  manager_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  registered_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "managers" */
export enum Managers_Constraint {
  /** unique or primary key constraint on columns "auth0_uid" */
  ManagersAuth0UidKey = 'managers_auth0_uid_key',
  /** unique or primary key constraint on columns "manager_id" */
  ManagersPkey = 'managers_pkey',
}

/** input type for inserting data into table "managers" */
export type Managers_Insert_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Managers_Max_Fields = {
  __typename?: 'managers_max_fields';
  auth0_uid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Managers_Min_Fields = {
  __typename?: 'managers_min_fields';
  auth0_uid?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "managers" */
export type Managers_Mutation_Response = {
  __typename?: 'managers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Managers>;
};

/** on_conflict condition type for table "managers" */
export type Managers_On_Conflict = {
  constraint: Managers_Constraint;
  update_columns?: Array<Managers_Update_Column>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

/** Ordering options when selecting data from "managers". */
export type Managers_Order_By = {
  auth0_uid?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  registered_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: managers */
export type Managers_Pk_Columns_Input = {
  manager_id: Scalars['uuid']['input'];
};

/** select columns of table "managers" */
export enum Managers_Select_Column {
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  Email = 'email',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  RegisteredAt = 'registered_at',
}

/** input type for updating data in table "managers" */
export type Managers_Set_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "managers" */
export type Managers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Managers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Managers_Stream_Cursor_Value_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "managers" */
export enum Managers_Update_Column {
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  Email = 'email',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  Name = 'name',
  /** column name */
  Phone = 'phone',
  /** column name */
  RegisteredAt = 'registered_at',
}

export type Managers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Managers_Set_Input>;
  /** filter the rows which have to be updated */
  where: Managers_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "managers" */
  delete_managers?: Maybe<Managers_Mutation_Response>;
  /** delete single row from the table: "managers" */
  delete_managers_by_pk?: Maybe<Managers>;
  /** delete data from the table: "partners" */
  delete_partners?: Maybe<Partners_Mutation_Response>;
  /** delete single row from the table: "partners" */
  delete_partners_by_pk?: Maybe<Partners>;
  /** delete data from the table: "students" */
  delete_students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  delete_students_by_pk?: Maybe<Students>;
  /** insert data into the table: "managers" */
  insert_managers?: Maybe<Managers_Mutation_Response>;
  /** insert a single row into the table: "managers" */
  insert_managers_one?: Maybe<Managers>;
  /** insert data into the table: "partners" */
  insert_partners?: Maybe<Partners_Mutation_Response>;
  /** insert a single row into the table: "partners" */
  insert_partners_one?: Maybe<Partners>;
  /** insert data into the table: "students" */
  insert_students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insert_students_one?: Maybe<Students>;
  /** update data of the table: "managers" */
  update_managers?: Maybe<Managers_Mutation_Response>;
  /** update single row of the table: "managers" */
  update_managers_by_pk?: Maybe<Managers>;
  /** update multiples rows of table: "managers" */
  update_managers_many?: Maybe<Array<Maybe<Managers_Mutation_Response>>>;
  /** update data of the table: "partners" */
  update_partners?: Maybe<Partners_Mutation_Response>;
  /** update single row of the table: "partners" */
  update_partners_by_pk?: Maybe<Partners>;
  /** update multiples rows of table: "partners" */
  update_partners_many?: Maybe<Array<Maybe<Partners_Mutation_Response>>>;
  /** update data of the table: "students" */
  update_students?: Maybe<Students_Mutation_Response>;
  /** update single row of the table: "students" */
  update_students_by_pk?: Maybe<Students>;
  /** update multiples rows of table: "students" */
  update_students_many?: Maybe<Array<Maybe<Students_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_ManagersArgs = {
  where: Managers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Managers_By_PkArgs = {
  manager_id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_PartnersArgs = {
  where: Partners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Partners_By_PkArgs = {
  partner_id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootDelete_StudentsArgs = {
  where: Students_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Students_By_PkArgs = {
  client_id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootInsert_ManagersArgs = {
  objects: Array<Managers_Insert_Input>;
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Managers_OneArgs = {
  object: Managers_Insert_Input;
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PartnersArgs = {
  objects: Array<Partners_Insert_Input>;
  on_conflict?: InputMaybe<Partners_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Partners_OneArgs = {
  object: Partners_Insert_Input;
  on_conflict?: InputMaybe<Partners_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudentsArgs = {
  objects: Array<Students_Insert_Input>;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Students_OneArgs = {
  object: Students_Insert_Input;
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ManagersArgs = {
  _set?: InputMaybe<Managers_Set_Input>;
  where: Managers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Managers_By_PkArgs = {
  _set?: InputMaybe<Managers_Set_Input>;
  pk_columns: Managers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Managers_ManyArgs = {
  updates: Array<Managers_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PartnersArgs = {
  _set?: InputMaybe<Partners_Set_Input>;
  where: Partners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Partners_By_PkArgs = {
  _set?: InputMaybe<Partners_Set_Input>;
  pk_columns: Partners_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Partners_ManyArgs = {
  updates: Array<Partners_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_StudentsArgs = {
  _set?: InputMaybe<Students_Set_Input>;
  where: Students_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Students_By_PkArgs = {
  _set?: InputMaybe<Students_Set_Input>;
  pk_columns: Students_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Students_ManyArgs = {
  updates: Array<Students_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "partners" */
export type Partners = {
  __typename?: 'partners';
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_zipcode?: Maybe<Scalars['String']['output']>;
  auth0_uid: Scalars['String']['output'];
  contact_email?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  partner_id: Scalars['uuid']['output'];
  registered_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "partners" */
export type Partners_Aggregate = {
  __typename?: 'partners_aggregate';
  aggregate?: Maybe<Partners_Aggregate_Fields>;
  nodes: Array<Partners>;
};

/** aggregate fields of "partners" */
export type Partners_Aggregate_Fields = {
  __typename?: 'partners_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Partners_Max_Fields>;
  min?: Maybe<Partners_Min_Fields>;
};

/** aggregate fields of "partners" */
export type Partners_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Partners_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "partners". All fields are combined with a logical 'AND'. */
export type Partners_Bool_Exp = {
  _and?: InputMaybe<Array<Partners_Bool_Exp>>;
  _not?: InputMaybe<Partners_Bool_Exp>;
  _or?: InputMaybe<Array<Partners_Bool_Exp>>;
  address_country?: InputMaybe<String_Comparison_Exp>;
  address_line1?: InputMaybe<String_Comparison_Exp>;
  address_line2?: InputMaybe<String_Comparison_Exp>;
  address_zipcode?: InputMaybe<String_Comparison_Exp>;
  auth0_uid?: InputMaybe<String_Comparison_Exp>;
  contact_email?: InputMaybe<String_Comparison_Exp>;
  contact_name?: InputMaybe<String_Comparison_Exp>;
  contact_phone?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  partner_id?: InputMaybe<Uuid_Comparison_Exp>;
  registered_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "partners" */
export enum Partners_Constraint {
  /** unique or primary key constraint on columns "auth0_uid" */
  PartnersAuth0UidKey = 'partners_auth0_uid_key',
  /** unique or primary key constraint on columns "partner_id" */
  PartnersPkey = 'partners_pkey',
}

/** input type for inserting data into table "partners" */
export type Partners_Insert_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_zipcode?: InputMaybe<Scalars['String']['input']>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Partners_Max_Fields = {
  __typename?: 'partners_max_fields';
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_zipcode?: Maybe<Scalars['String']['output']>;
  auth0_uid?: Maybe<Scalars['String']['output']>;
  contact_email?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Partners_Min_Fields = {
  __typename?: 'partners_min_fields';
  address_country?: Maybe<Scalars['String']['output']>;
  address_line1?: Maybe<Scalars['String']['output']>;
  address_line2?: Maybe<Scalars['String']['output']>;
  address_zipcode?: Maybe<Scalars['String']['output']>;
  auth0_uid?: Maybe<Scalars['String']['output']>;
  contact_email?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "partners" */
export type Partners_Mutation_Response = {
  __typename?: 'partners_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Partners>;
};

/** on_conflict condition type for table "partners" */
export type Partners_On_Conflict = {
  constraint: Partners_Constraint;
  update_columns?: Array<Partners_Update_Column>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

/** Ordering options when selecting data from "partners". */
export type Partners_Order_By = {
  address_country?: InputMaybe<Order_By>;
  address_line1?: InputMaybe<Order_By>;
  address_line2?: InputMaybe<Order_By>;
  address_zipcode?: InputMaybe<Order_By>;
  auth0_uid?: InputMaybe<Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_phone?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  registered_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: partners */
export type Partners_Pk_Columns_Input = {
  partner_id: Scalars['uuid']['input'];
};

/** select columns of table "partners" */
export enum Partners_Select_Column {
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressZipcode = 'address_zipcode',
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactPhone = 'contact_phone',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  RegisteredAt = 'registered_at',
}

/** input type for updating data in table "partners" */
export type Partners_Set_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_zipcode?: InputMaybe<Scalars['String']['input']>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "partners" */
export type Partners_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Partners_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Partners_Stream_Cursor_Value_Input = {
  address_country?: InputMaybe<Scalars['String']['input']>;
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  address_zipcode?: InputMaybe<Scalars['String']['input']>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "partners" */
export enum Partners_Update_Column {
  /** column name */
  AddressCountry = 'address_country',
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressZipcode = 'address_zipcode',
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  ContactEmail = 'contact_email',
  /** column name */
  ContactName = 'contact_name',
  /** column name */
  ContactPhone = 'contact_phone',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  RegisteredAt = 'registered_at',
}

export type Partners_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Partners_Set_Input>;
  /** filter the rows which have to be updated */
  where: Partners_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "managers" */
  managers: Array<Managers>;
  /** fetch aggregated fields from the table: "managers" */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** fetch data from the table: "partners" */
  partners: Array<Partners>;
  /** fetch aggregated fields from the table: "partners" */
  partners_aggregate: Partners_Aggregate;
  /** fetch data from the table: "partners" using primary key columns */
  partners_by_pk?: Maybe<Partners>;
  /** fetch data from the table: "students" */
  students: Array<Students>;
  /** fetch aggregated fields from the table: "students" */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
};

export type Query_RootManagersArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

export type Query_RootManagers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

export type Query_RootManagers_By_PkArgs = {
  manager_id: Scalars['uuid']['input'];
};

export type Query_RootPartnersArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

export type Query_RootPartners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

export type Query_RootPartners_By_PkArgs = {
  partner_id: Scalars['uuid']['input'];
};

export type Query_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

export type Query_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

export type Query_RootStudents_By_PkArgs = {
  client_id: Scalars['uuid']['input'];
};

/** columns and relationships of "students" */
export type Students = {
  __typename?: 'students';
  auth0_uid: Scalars['String']['output'];
  birthday: Scalars['date']['output'];
  client_id: Scalars['uuid']['output'];
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passport_country?: Maybe<Scalars['String']['output']>;
  passport_expires?: Maybe<Scalars['date']['output']>;
  passport_nationality?: Maybe<Scalars['String']['output']>;
  passport_no?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "students" */
export type Students_Aggregate = {
  __typename?: 'students_aggregate';
  aggregate?: Maybe<Students_Aggregate_Fields>;
  nodes: Array<Students>;
};

/** aggregate fields of "students" */
export type Students_Aggregate_Fields = {
  __typename?: 'students_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Students_Max_Fields>;
  min?: Maybe<Students_Min_Fields>;
};

/** aggregate fields of "students" */
export type Students_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Students_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "students". All fields are combined with a logical 'AND'. */
export type Students_Bool_Exp = {
  _and?: InputMaybe<Array<Students_Bool_Exp>>;
  _not?: InputMaybe<Students_Bool_Exp>;
  _or?: InputMaybe<Array<Students_Bool_Exp>>;
  auth0_uid?: InputMaybe<String_Comparison_Exp>;
  birthday?: InputMaybe<Date_Comparison_Exp>;
  client_id?: InputMaybe<Uuid_Comparison_Exp>;
  department?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  major?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  passport_country?: InputMaybe<String_Comparison_Exp>;
  passport_expires?: InputMaybe<Date_Comparison_Exp>;
  passport_nationality?: InputMaybe<String_Comparison_Exp>;
  passport_no?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  registered_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "students" */
export enum Students_Constraint {
  /** unique or primary key constraint on columns "auth0_uid" */
  StudentsAuth0UidKey = 'students_auth0_uid_key',
  /** unique or primary key constraint on columns "client_id" */
  StudentsPkey = 'students_pkey',
}

/** input type for inserting data into table "students" */
export type Students_Insert_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passport_country?: InputMaybe<Scalars['String']['input']>;
  passport_expires?: InputMaybe<Scalars['date']['input']>;
  passport_nationality?: InputMaybe<Scalars['String']['input']>;
  passport_no?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Students_Max_Fields = {
  __typename?: 'students_max_fields';
  auth0_uid?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  client_id?: Maybe<Scalars['uuid']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passport_country?: Maybe<Scalars['String']['output']>;
  passport_expires?: Maybe<Scalars['date']['output']>;
  passport_nationality?: Maybe<Scalars['String']['output']>;
  passport_no?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Students_Min_Fields = {
  __typename?: 'students_min_fields';
  auth0_uid?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['date']['output']>;
  client_id?: Maybe<Scalars['uuid']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  major?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  passport_country?: Maybe<Scalars['String']['output']>;
  passport_expires?: Maybe<Scalars['date']['output']>;
  passport_nationality?: Maybe<Scalars['String']['output']>;
  passport_no?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** on_conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Ordering options when selecting data from "students". */
export type Students_Order_By = {
  auth0_uid?: InputMaybe<Order_By>;
  birthday?: InputMaybe<Order_By>;
  client_id?: InputMaybe<Order_By>;
  department?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  major?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  passport_country?: InputMaybe<Order_By>;
  passport_expires?: InputMaybe<Order_By>;
  passport_nationality?: InputMaybe<Order_By>;
  passport_no?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  registered_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: students */
export type Students_Pk_Columns_Input = {
  client_id: Scalars['uuid']['input'];
};

/** select columns of table "students" */
export enum Students_Select_Column {
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Department = 'department',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Major = 'major',
  /** column name */
  Name = 'name',
  /** column name */
  PassportCountry = 'passport_country',
  /** column name */
  PassportExpires = 'passport_expires',
  /** column name */
  PassportNationality = 'passport_nationality',
  /** column name */
  PassportNo = 'passport_no',
  /** column name */
  Phone = 'phone',
  /** column name */
  RegisteredAt = 'registered_at',
}

/** input type for updating data in table "students" */
export type Students_Set_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passport_country?: InputMaybe<Scalars['String']['input']>;
  passport_expires?: InputMaybe<Scalars['date']['input']>;
  passport_nationality?: InputMaybe<Scalars['String']['input']>;
  passport_no?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "students" */
export type Students_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Students_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Students_Stream_Cursor_Value_Input = {
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['date']['input']>;
  client_id?: InputMaybe<Scalars['uuid']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  major?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  passport_country?: InputMaybe<Scalars['String']['input']>;
  passport_expires?: InputMaybe<Scalars['date']['input']>;
  passport_nationality?: InputMaybe<Scalars['String']['input']>;
  passport_no?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  registered_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "students" */
export enum Students_Update_Column {
  /** column name */
  Auth0Uid = 'auth0_uid',
  /** column name */
  Birthday = 'birthday',
  /** column name */
  ClientId = 'client_id',
  /** column name */
  Department = 'department',
  /** column name */
  Email = 'email',
  /** column name */
  Gender = 'gender',
  /** column name */
  Major = 'major',
  /** column name */
  Name = 'name',
  /** column name */
  PassportCountry = 'passport_country',
  /** column name */
  PassportExpires = 'passport_expires',
  /** column name */
  PassportNationality = 'passport_nationality',
  /** column name */
  PassportNo = 'passport_no',
  /** column name */
  Phone = 'phone',
  /** column name */
  RegisteredAt = 'registered_at',
}

export type Students_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Students_Set_Input>;
  /** filter the rows which have to be updated */
  where: Students_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "managers" */
  managers: Array<Managers>;
  /** fetch aggregated fields from the table: "managers" */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** fetch data from the table in a streaming manner: "managers" */
  managers_stream: Array<Managers>;
  /** fetch data from the table: "partners" */
  partners: Array<Partners>;
  /** fetch aggregated fields from the table: "partners" */
  partners_aggregate: Partners_Aggregate;
  /** fetch data from the table: "partners" using primary key columns */
  partners_by_pk?: Maybe<Partners>;
  /** fetch data from the table in a streaming manner: "partners" */
  partners_stream: Array<Partners>;
  /** fetch data from the table: "students" */
  students: Array<Students>;
  /** fetch aggregated fields from the table: "students" */
  students_aggregate: Students_Aggregate;
  /** fetch data from the table: "students" using primary key columns */
  students_by_pk?: Maybe<Students>;
  /** fetch data from the table in a streaming manner: "students" */
  students_stream: Array<Students>;
};

export type Subscription_RootManagersArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

export type Subscription_RootManagers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Managers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Managers_Order_By>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

export type Subscription_RootManagers_By_PkArgs = {
  manager_id: Scalars['uuid']['input'];
};

export type Subscription_RootManagers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Managers_Stream_Cursor_Input>>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

export type Subscription_RootPartnersArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

export type Subscription_RootPartners_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Partners_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Partners_Order_By>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

export type Subscription_RootPartners_By_PkArgs = {
  partner_id: Scalars['uuid']['input'];
};

export type Subscription_RootPartners_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Partners_Stream_Cursor_Input>>;
  where?: InputMaybe<Partners_Bool_Exp>;
};

export type Subscription_RootStudentsArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

export type Subscription_RootStudents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Students_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Students_Order_By>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

export type Subscription_RootStudents_By_PkArgs = {
  client_id: Scalars['uuid']['input'];
};

export type Subscription_RootStudents_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Students_Stream_Cursor_Input>>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AddManagerProfileMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
}>;

export type AddManagerProfileMutation = {
  __typename?: 'mutation_root';
  insert_managers_one?: { __typename?: 'managers'; manager_id: any } | null;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never }>;

export type MyQueryQuery = {
  __typename?: 'query_root';
  managers: Array<{
    __typename?: 'managers';
    email?: string | null;
    name?: string | null;
    phone?: string | null;
  }>;
};

export const AddManagerProfileDocument = gql`
  mutation AddManagerProfile(
    $name: String
    $email: String
    $phone: String
    $auth0_uid: String
  ) {
    insert_managers_one(
      object: {
        name: $name
        email: $email
        phone: $phone
        auth0_uid: $auth0_uid
      }
    ) {
      manager_id
    }
  }
`;

export function useAddManagerProfileMutation() {
  return Urql.useMutation<
    AddManagerProfileMutation,
    AddManagerProfileMutationVariables
  >(AddManagerProfileDocument);
}
export const MyQueryDocument = gql`
  query MyQuery {
    managers {
      email
      name
      phone
    }
  }
`;

export function useMyQueryQuery(
  options?: Omit<Urql.UseQueryArgs<MyQueryQueryVariables>, 'query'>
) {
  return Urql.useQuery<MyQueryQuery, MyQueryQueryVariables>({
    query: MyQueryDocument,
    ...options,
  });
}
import { IntrospectionQuery } from 'graphql';
export default {
  __schema: {
    queryType: {
      name: 'query_root',
    },
    mutationType: {
      name: 'mutation_root',
    },
    subscriptionType: {
      name: 'subscription_root',
    },
    types: [
      {
        kind: 'OBJECT',
        name: 'managers',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'manager_id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'managers_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'managers_aggregate_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'managers',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'managers_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'managers_max_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'managers_min_fields',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'managers_max_fields',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'manager_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'managers_min_fields',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'manager_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'managers_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'managers',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'mutation_root',
        fields: [
          {
            name: 'delete_managers',
            type: {
              kind: 'OBJECT',
              name: 'managers_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'delete_managers_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
            },
            args: [
              {
                name: 'manager_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'delete_partners',
            type: {
              kind: 'OBJECT',
              name: 'partners_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'delete_partners_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'partners',
              ofType: null,
            },
            args: [
              {
                name: 'partner_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'delete_students',
            type: {
              kind: 'OBJECT',
              name: 'students_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'delete_students_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'students',
              ofType: null,
            },
            args: [
              {
                name: 'client_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'insert_managers',
            type: {
              kind: 'OBJECT',
              name: 'managers_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'insert_managers_one',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'insert_partners',
            type: {
              kind: 'OBJECT',
              name: 'partners_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'insert_partners_one',
            type: {
              kind: 'OBJECT',
              name: 'partners',
              ofType: null,
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'insert_students',
            type: {
              kind: 'OBJECT',
              name: 'students_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: 'objects',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'insert_students_one',
            type: {
              kind: 'OBJECT',
              name: 'students',
              ofType: null,
            },
            args: [
              {
                name: 'object',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'on_conflict',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'update_managers',
            type: {
              kind: 'OBJECT',
              name: 'managers_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_managers_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_managers_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'managers_mutation_response',
                ofType: null,
              },
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'update_partners',
            type: {
              kind: 'OBJECT',
              name: 'partners_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_partners_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'partners',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_partners_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'partners_mutation_response',
                ofType: null,
              },
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'update_students',
            type: {
              kind: 'OBJECT',
              name: 'students_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_students_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'students',
              ofType: null,
            },
            args: [
              {
                name: '_set',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'pk_columns',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'update_students_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'students_mutation_response',
                ofType: null,
              },
            },
            args: [
              {
                name: 'updates',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners',
        fields: [
          {
            name: 'address_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line1',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line2',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_zipcode',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'auth0_uid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'contact_email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'partner_id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'partners_aggregate_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'partners',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'partners_max_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'partners_min_fields',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners_max_fields',
        fields: [
          {
            name: 'address_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line1',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line2',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_zipcode',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'partner_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners_min_fields',
        fields: [
          {
            name: 'address_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line1',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_line2',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'address_zipcode',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'contact_phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'partner_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'partners_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'partners',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'query_root',
        fields: [
          {
            name: 'managers',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'managers',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'managers_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'managers_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'managers_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
            },
            args: [
              {
                name: 'manager_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'partners',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'partners',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'partners_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'partners_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'partners_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'partners',
              ofType: null,
            },
            args: [
              {
                name: 'partner_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'students',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'students',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'students_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'students_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'students_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'students',
              ofType: null,
            },
            args: [
              {
                name: 'client_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'birthday',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'client_id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'department',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'gender',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'major',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_expires',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_nationality',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_no',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'students_aggregate_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'nodes',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'students',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students_aggregate_fields',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'columns',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'students_max_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'students_min_fields',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students_max_fields',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'birthday',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'client_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'department',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'gender',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'major',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_expires',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_nationality',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_no',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students_min_fields',
        fields: [
          {
            name: 'auth0_uid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'birthday',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'client_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'department',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'gender',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'major',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_country',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_expires',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_nationality',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'passport_no',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'phone',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'registered_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'students_mutation_response',
        fields: [
          {
            name: 'affected_rows',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'returning',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'students',
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'subscription_root',
        fields: [
          {
            name: 'managers',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'managers',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'managers_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'managers_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'managers_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
            },
            args: [
              {
                name: 'manager_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'managers_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'managers',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'partners',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'partners',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'partners_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'partners_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'partners_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'partners',
              ofType: null,
            },
            args: [
              {
                name: 'partner_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'partners_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'partners',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'students',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'students',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'students_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'students_aggregate',
                ofType: null,
              },
            },
            args: [
              {
                name: 'distinct_on',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'limit',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'offset',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'order_by',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'students_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'students',
              ofType: null,
            },
            args: [
              {
                name: 'client_id',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'students_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'students',
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: 'batch_size',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;
