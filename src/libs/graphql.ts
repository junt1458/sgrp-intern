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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
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

/** columns and relationships of "applications" */
export type Applications = {
  __typename?: 'applications';
  application_id: Scalars['uuid']['output'];
  applied_at: Scalars['timestamptz']['output'];
  display_status?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  manager?: Maybe<Managers>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  opportunity: Opportunities;
  opportunity_id: Scalars['uuid']['output'];
  /** An object relationship */
  partner: Partners;
  partner_id: Scalars['uuid']['output'];
  /** An object relationship */
  student: Students;
  student_id: Scalars['uuid']['output'];
};

/** aggregated selection of "applications" */
export type Applications_Aggregate = {
  __typename?: 'applications_aggregate';
  aggregate?: Maybe<Applications_Aggregate_Fields>;
  nodes: Array<Applications>;
};

export type Applications_Aggregate_Bool_Exp = {
  count?: InputMaybe<Applications_Aggregate_Bool_Exp_Count>;
};

export type Applications_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Applications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Applications_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "applications" */
export type Applications_Aggregate_Fields = {
  __typename?: 'applications_aggregate_fields';
  avg?: Maybe<Applications_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Applications_Max_Fields>;
  min?: Maybe<Applications_Min_Fields>;
  stddev?: Maybe<Applications_Stddev_Fields>;
  stddev_pop?: Maybe<Applications_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Applications_Stddev_Samp_Fields>;
  sum?: Maybe<Applications_Sum_Fields>;
  var_pop?: Maybe<Applications_Var_Pop_Fields>;
  var_samp?: Maybe<Applications_Var_Samp_Fields>;
  variance?: Maybe<Applications_Variance_Fields>;
};

/** aggregate fields of "applications" */
export type Applications_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Applications_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "applications" */
export type Applications_Aggregate_Order_By = {
  avg?: InputMaybe<Applications_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Applications_Max_Order_By>;
  min?: InputMaybe<Applications_Min_Order_By>;
  stddev?: InputMaybe<Applications_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Applications_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Applications_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Applications_Sum_Order_By>;
  var_pop?: InputMaybe<Applications_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Applications_Var_Samp_Order_By>;
  variance?: InputMaybe<Applications_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "applications" */
export type Applications_Arr_Rel_Insert_Input = {
  data: Array<Applications_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Applications_On_Conflict>;
};

/** aggregate avg on columns */
export type Applications_Avg_Fields = {
  __typename?: 'applications_avg_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "applications" */
export type Applications_Avg_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type Applications_Bool_Exp = {
  _and?: InputMaybe<Array<Applications_Bool_Exp>>;
  _not?: InputMaybe<Applications_Bool_Exp>;
  _or?: InputMaybe<Array<Applications_Bool_Exp>>;
  application_id?: InputMaybe<Uuid_Comparison_Exp>;
  applied_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_status?: InputMaybe<Int_Comparison_Exp>;
  manager?: InputMaybe<Managers_Bool_Exp>;
  manager_id?: InputMaybe<Uuid_Comparison_Exp>;
  opportunity?: InputMaybe<Opportunities_Bool_Exp>;
  opportunity_id?: InputMaybe<Uuid_Comparison_Exp>;
  partner?: InputMaybe<Partners_Bool_Exp>;
  partner_id?: InputMaybe<Uuid_Comparison_Exp>;
  student?: InputMaybe<Students_Bool_Exp>;
  student_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "applications" */
export enum Applications_Constraint {
  /** unique or primary key constraint on columns "application_id" */
  ApplicationsPkey = 'applications_pkey',
}

/** input type for incrementing numeric columns in table "applications" */
export type Applications_Inc_Input = {
  display_status?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "applications" */
export type Applications_Insert_Input = {
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  manager?: InputMaybe<Managers_Obj_Rel_Insert_Input>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity?: InputMaybe<Opportunities_Obj_Rel_Insert_Input>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner?: InputMaybe<Partners_Obj_Rel_Insert_Input>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  student?: InputMaybe<Students_Obj_Rel_Insert_Input>;
  student_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Applications_Max_Fields = {
  __typename?: 'applications_max_fields';
  application_id?: Maybe<Scalars['uuid']['output']>;
  applied_at?: Maybe<Scalars['timestamptz']['output']>;
  display_status?: Maybe<Scalars['Int']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  opportunity_id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  student_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "applications" */
export type Applications_Max_Order_By = {
  application_id?: InputMaybe<Order_By>;
  applied_at?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Applications_Min_Fields = {
  __typename?: 'applications_min_fields';
  application_id?: Maybe<Scalars['uuid']['output']>;
  applied_at?: Maybe<Scalars['timestamptz']['output']>;
  display_status?: Maybe<Scalars['Int']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  opportunity_id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  student_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "applications" */
export type Applications_Min_Order_By = {
  application_id?: InputMaybe<Order_By>;
  applied_at?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "applications" */
export type Applications_Mutation_Response = {
  __typename?: 'applications_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Applications>;
};

/** on_conflict condition type for table "applications" */
export type Applications_On_Conflict = {
  constraint: Applications_Constraint;
  update_columns?: Array<Applications_Update_Column>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** Ordering options when selecting data from "applications". */
export type Applications_Order_By = {
  application_id?: InputMaybe<Order_By>;
  applied_at?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  manager?: InputMaybe<Managers_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity?: InputMaybe<Opportunities_Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner?: InputMaybe<Partners_Order_By>;
  partner_id?: InputMaybe<Order_By>;
  student?: InputMaybe<Students_Order_By>;
  student_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: applications */
export type Applications_Pk_Columns_Input = {
  application_id: Scalars['uuid']['input'];
};

/** select columns of table "applications" */
export enum Applications_Select_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  AppliedAt = 'applied_at',
  /** column name */
  DisplayStatus = 'display_status',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  StudentId = 'student_id',
}

/** input type for updating data in table "applications" */
export type Applications_Set_Input = {
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  student_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Applications_Stddev_Fields = {
  __typename?: 'applications_stddev_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "applications" */
export type Applications_Stddev_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Applications_Stddev_Pop_Fields = {
  __typename?: 'applications_stddev_pop_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "applications" */
export type Applications_Stddev_Pop_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Applications_Stddev_Samp_Fields = {
  __typename?: 'applications_stddev_samp_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "applications" */
export type Applications_Stddev_Samp_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "applications" */
export type Applications_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Applications_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Applications_Stream_Cursor_Value_Input = {
  application_id?: InputMaybe<Scalars['uuid']['input']>;
  applied_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  student_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Applications_Sum_Fields = {
  __typename?: 'applications_sum_fields';
  display_status?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "applications" */
export type Applications_Sum_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** update columns of table "applications" */
export enum Applications_Update_Column {
  /** column name */
  ApplicationId = 'application_id',
  /** column name */
  AppliedAt = 'applied_at',
  /** column name */
  DisplayStatus = 'display_status',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  StudentId = 'student_id',
}

export type Applications_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Applications_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Applications_Set_Input>;
  /** filter the rows which have to be updated */
  where: Applications_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Applications_Var_Pop_Fields = {
  __typename?: 'applications_var_pop_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "applications" */
export type Applications_Var_Pop_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Applications_Var_Samp_Fields = {
  __typename?: 'applications_var_samp_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "applications" */
export type Applications_Var_Samp_Order_By = {
  display_status?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Applications_Variance_Fields = {
  __typename?: 'applications_variance_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "applications" */
export type Applications_Variance_Order_By = {
  display_status?: InputMaybe<Order_By>;
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
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  auth0_uid: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  manager_id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  opportunities: Array<Opportunities>;
  /** An aggregate relationship */
  opportunities_aggregate: Opportunities_Aggregate;
  phone?: Maybe<Scalars['String']['output']>;
  registered_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "managers" */
export type ManagersApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "managers" */
export type ManagersApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "managers" */
export type ManagersOpportunitiesArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

/** columns and relationships of "managers" */
export type ManagersOpportunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
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
  applications?: InputMaybe<Applications_Bool_Exp>;
  applications_aggregate?: InputMaybe<Applications_Aggregate_Bool_Exp>;
  auth0_uid?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  manager_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  opportunities?: InputMaybe<Opportunities_Bool_Exp>;
  opportunities_aggregate?: InputMaybe<Opportunities_Aggregate_Bool_Exp>;
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
  applications?: InputMaybe<Applications_Arr_Rel_Insert_Input>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  opportunities?: InputMaybe<Opportunities_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "managers" */
export type Managers_Obj_Rel_Insert_Input = {
  data: Managers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Managers_On_Conflict>;
};

/** on_conflict condition type for table "managers" */
export type Managers_On_Conflict = {
  constraint: Managers_Constraint;
  update_columns?: Array<Managers_Update_Column>;
  where?: InputMaybe<Managers_Bool_Exp>;
};

/** Ordering options when selecting data from "managers". */
export type Managers_Order_By = {
  applications_aggregate?: InputMaybe<Applications_Aggregate_Order_By>;
  auth0_uid?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  opportunities_aggregate?: InputMaybe<Opportunities_Aggregate_Order_By>;
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
  /** delete data from the table: "applications" */
  delete_applications?: Maybe<Applications_Mutation_Response>;
  /** delete single row from the table: "applications" */
  delete_applications_by_pk?: Maybe<Applications>;
  /** delete data from the table: "managers" */
  delete_managers?: Maybe<Managers_Mutation_Response>;
  /** delete single row from the table: "managers" */
  delete_managers_by_pk?: Maybe<Managers>;
  /** delete data from the table: "opportunities" */
  delete_opportunities?: Maybe<Opportunities_Mutation_Response>;
  /** delete single row from the table: "opportunities" */
  delete_opportunities_by_pk?: Maybe<Opportunities>;
  /** delete data from the table: "partners" */
  delete_partners?: Maybe<Partners_Mutation_Response>;
  /** delete single row from the table: "partners" */
  delete_partners_by_pk?: Maybe<Partners>;
  /** delete data from the table: "students" */
  delete_students?: Maybe<Students_Mutation_Response>;
  /** delete single row from the table: "students" */
  delete_students_by_pk?: Maybe<Students>;
  /** insert data into the table: "applications" */
  insert_applications?: Maybe<Applications_Mutation_Response>;
  /** insert a single row into the table: "applications" */
  insert_applications_one?: Maybe<Applications>;
  /** insert data into the table: "managers" */
  insert_managers?: Maybe<Managers_Mutation_Response>;
  /** insert a single row into the table: "managers" */
  insert_managers_one?: Maybe<Managers>;
  /** insert data into the table: "opportunities" */
  insert_opportunities?: Maybe<Opportunities_Mutation_Response>;
  /** insert a single row into the table: "opportunities" */
  insert_opportunities_one?: Maybe<Opportunities>;
  /** insert data into the table: "partners" */
  insert_partners?: Maybe<Partners_Mutation_Response>;
  /** insert a single row into the table: "partners" */
  insert_partners_one?: Maybe<Partners>;
  /** insert data into the table: "students" */
  insert_students?: Maybe<Students_Mutation_Response>;
  /** insert a single row into the table: "students" */
  insert_students_one?: Maybe<Students>;
  /** update data of the table: "applications" */
  update_applications?: Maybe<Applications_Mutation_Response>;
  /** update single row of the table: "applications" */
  update_applications_by_pk?: Maybe<Applications>;
  /** update multiples rows of table: "applications" */
  update_applications_many?: Maybe<
    Array<Maybe<Applications_Mutation_Response>>
  >;
  /** update data of the table: "managers" */
  update_managers?: Maybe<Managers_Mutation_Response>;
  /** update single row of the table: "managers" */
  update_managers_by_pk?: Maybe<Managers>;
  /** update multiples rows of table: "managers" */
  update_managers_many?: Maybe<Array<Maybe<Managers_Mutation_Response>>>;
  /** update data of the table: "opportunities" */
  update_opportunities?: Maybe<Opportunities_Mutation_Response>;
  /** update single row of the table: "opportunities" */
  update_opportunities_by_pk?: Maybe<Opportunities>;
  /** update multiples rows of table: "opportunities" */
  update_opportunities_many?: Maybe<
    Array<Maybe<Opportunities_Mutation_Response>>
  >;
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
export type Mutation_RootDelete_ApplicationsArgs = {
  where: Applications_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Applications_By_PkArgs = {
  application_id: Scalars['uuid']['input'];
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
export type Mutation_RootDelete_OpportunitiesArgs = {
  where: Opportunities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Opportunities_By_PkArgs = {
  opportunity_id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_ApplicationsArgs = {
  objects: Array<Applications_Insert_Input>;
  on_conflict?: InputMaybe<Applications_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Applications_OneArgs = {
  object: Applications_Insert_Input;
  on_conflict?: InputMaybe<Applications_On_Conflict>;
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
export type Mutation_RootInsert_OpportunitiesArgs = {
  objects: Array<Opportunities_Insert_Input>;
  on_conflict?: InputMaybe<Opportunities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Opportunities_OneArgs = {
  object: Opportunities_Insert_Input;
  on_conflict?: InputMaybe<Opportunities_On_Conflict>;
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
export type Mutation_RootUpdate_ApplicationsArgs = {
  _inc?: InputMaybe<Applications_Inc_Input>;
  _set?: InputMaybe<Applications_Set_Input>;
  where: Applications_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Applications_By_PkArgs = {
  _inc?: InputMaybe<Applications_Inc_Input>;
  _set?: InputMaybe<Applications_Set_Input>;
  pk_columns: Applications_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Applications_ManyArgs = {
  updates: Array<Applications_Updates>;
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
export type Mutation_RootUpdate_OpportunitiesArgs = {
  _inc?: InputMaybe<Opportunities_Inc_Input>;
  _set?: InputMaybe<Opportunities_Set_Input>;
  where: Opportunities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Opportunities_By_PkArgs = {
  _inc?: InputMaybe<Opportunities_Inc_Input>;
  _set?: InputMaybe<Opportunities_Set_Input>;
  pk_columns: Opportunities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Opportunities_ManyArgs = {
  updates: Array<Opportunities_Updates>;
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

/** columns and relationships of "opportunities" */
export type Opportunities = {
  __typename?: 'opportunities';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  city: Scalars['String']['output'];
  date_from: Scalars['date']['output'];
  date_to: Scalars['date']['output'];
  detail?: Maybe<Scalars['String']['output']>;
  display_status?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  manager?: Maybe<Managers>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  opportunity_id: Scalars['uuid']['output'];
  /** An object relationship */
  partner: Partners;
  partner_id: Scalars['uuid']['output'];
  posted_at: Scalars['timestamptz']['output'];
  slots?: Maybe<Scalars['Int']['output']>;
};

/** columns and relationships of "opportunities" */
export type OpportunitiesApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "opportunities" */
export type OpportunitiesApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** aggregated selection of "opportunities" */
export type Opportunities_Aggregate = {
  __typename?: 'opportunities_aggregate';
  aggregate?: Maybe<Opportunities_Aggregate_Fields>;
  nodes: Array<Opportunities>;
};

export type Opportunities_Aggregate_Bool_Exp = {
  count?: InputMaybe<Opportunities_Aggregate_Bool_Exp_Count>;
};

export type Opportunities_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Opportunities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Opportunities_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "opportunities" */
export type Opportunities_Aggregate_Fields = {
  __typename?: 'opportunities_aggregate_fields';
  avg?: Maybe<Opportunities_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Opportunities_Max_Fields>;
  min?: Maybe<Opportunities_Min_Fields>;
  stddev?: Maybe<Opportunities_Stddev_Fields>;
  stddev_pop?: Maybe<Opportunities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Opportunities_Stddev_Samp_Fields>;
  sum?: Maybe<Opportunities_Sum_Fields>;
  var_pop?: Maybe<Opportunities_Var_Pop_Fields>;
  var_samp?: Maybe<Opportunities_Var_Samp_Fields>;
  variance?: Maybe<Opportunities_Variance_Fields>;
};

/** aggregate fields of "opportunities" */
export type Opportunities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Opportunities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "opportunities" */
export type Opportunities_Aggregate_Order_By = {
  avg?: InputMaybe<Opportunities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Opportunities_Max_Order_By>;
  min?: InputMaybe<Opportunities_Min_Order_By>;
  stddev?: InputMaybe<Opportunities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Opportunities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Opportunities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Opportunities_Sum_Order_By>;
  var_pop?: InputMaybe<Opportunities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Opportunities_Var_Samp_Order_By>;
  variance?: InputMaybe<Opportunities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "opportunities" */
export type Opportunities_Arr_Rel_Insert_Input = {
  data: Array<Opportunities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Opportunities_On_Conflict>;
};

/** aggregate avg on columns */
export type Opportunities_Avg_Fields = {
  __typename?: 'opportunities_avg_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "opportunities" */
export type Opportunities_Avg_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "opportunities". All fields are combined with a logical 'AND'. */
export type Opportunities_Bool_Exp = {
  _and?: InputMaybe<Array<Opportunities_Bool_Exp>>;
  _not?: InputMaybe<Opportunities_Bool_Exp>;
  _or?: InputMaybe<Array<Opportunities_Bool_Exp>>;
  applications?: InputMaybe<Applications_Bool_Exp>;
  applications_aggregate?: InputMaybe<Applications_Aggregate_Bool_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  date_from?: InputMaybe<Date_Comparison_Exp>;
  date_to?: InputMaybe<Date_Comparison_Exp>;
  detail?: InputMaybe<String_Comparison_Exp>;
  display_status?: InputMaybe<Int_Comparison_Exp>;
  field?: InputMaybe<String_Comparison_Exp>;
  manager?: InputMaybe<Managers_Bool_Exp>;
  manager_id?: InputMaybe<Uuid_Comparison_Exp>;
  opportunity_id?: InputMaybe<Uuid_Comparison_Exp>;
  partner?: InputMaybe<Partners_Bool_Exp>;
  partner_id?: InputMaybe<Uuid_Comparison_Exp>;
  posted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  slots?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "opportunities" */
export enum Opportunities_Constraint {
  /** unique or primary key constraint on columns "opportunity_id" */
  OpportunitiesPkey = 'opportunities_pkey',
}

/** input type for incrementing numeric columns in table "opportunities" */
export type Opportunities_Inc_Input = {
  display_status?: InputMaybe<Scalars['Int']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "opportunities" */
export type Opportunities_Insert_Input = {
  applications?: InputMaybe<Applications_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['date']['input']>;
  date_to?: InputMaybe<Scalars['date']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Managers_Obj_Rel_Insert_Input>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner?: InputMaybe<Partners_Obj_Rel_Insert_Input>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  posted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Opportunities_Max_Fields = {
  __typename?: 'opportunities_max_fields';
  city?: Maybe<Scalars['String']['output']>;
  date_from?: Maybe<Scalars['date']['output']>;
  date_to?: Maybe<Scalars['date']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  display_status?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  opportunity_id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  posted_at?: Maybe<Scalars['timestamptz']['output']>;
  slots?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "opportunities" */
export type Opportunities_Max_Order_By = {
  city?: InputMaybe<Order_By>;
  date_from?: InputMaybe<Order_By>;
  date_to?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  field?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Opportunities_Min_Fields = {
  __typename?: 'opportunities_min_fields';
  city?: Maybe<Scalars['String']['output']>;
  date_from?: Maybe<Scalars['date']['output']>;
  date_to?: Maybe<Scalars['date']['output']>;
  detail?: Maybe<Scalars['String']['output']>;
  display_status?: Maybe<Scalars['Int']['output']>;
  field?: Maybe<Scalars['String']['output']>;
  manager_id?: Maybe<Scalars['uuid']['output']>;
  opportunity_id?: Maybe<Scalars['uuid']['output']>;
  partner_id?: Maybe<Scalars['uuid']['output']>;
  posted_at?: Maybe<Scalars['timestamptz']['output']>;
  slots?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "opportunities" */
export type Opportunities_Min_Order_By = {
  city?: InputMaybe<Order_By>;
  date_from?: InputMaybe<Order_By>;
  date_to?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  field?: InputMaybe<Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "opportunities" */
export type Opportunities_Mutation_Response = {
  __typename?: 'opportunities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Opportunities>;
};

/** input type for inserting object relation for remote table "opportunities" */
export type Opportunities_Obj_Rel_Insert_Input = {
  data: Opportunities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Opportunities_On_Conflict>;
};

/** on_conflict condition type for table "opportunities" */
export type Opportunities_On_Conflict = {
  constraint: Opportunities_Constraint;
  update_columns?: Array<Opportunities_Update_Column>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

/** Ordering options when selecting data from "opportunities". */
export type Opportunities_Order_By = {
  applications_aggregate?: InputMaybe<Applications_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  date_from?: InputMaybe<Order_By>;
  date_to?: InputMaybe<Order_By>;
  detail?: InputMaybe<Order_By>;
  display_status?: InputMaybe<Order_By>;
  field?: InputMaybe<Order_By>;
  manager?: InputMaybe<Managers_Order_By>;
  manager_id?: InputMaybe<Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  partner?: InputMaybe<Partners_Order_By>;
  partner_id?: InputMaybe<Order_By>;
  posted_at?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** primary key columns input for table: opportunities */
export type Opportunities_Pk_Columns_Input = {
  opportunity_id: Scalars['uuid']['input'];
};

/** select columns of table "opportunities" */
export enum Opportunities_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  DateFrom = 'date_from',
  /** column name */
  DateTo = 'date_to',
  /** column name */
  Detail = 'detail',
  /** column name */
  DisplayStatus = 'display_status',
  /** column name */
  Field = 'field',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  PostedAt = 'posted_at',
  /** column name */
  Slots = 'slots',
}

/** input type for updating data in table "opportunities" */
export type Opportunities_Set_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['date']['input']>;
  date_to?: InputMaybe<Scalars['date']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  posted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Opportunities_Stddev_Fields = {
  __typename?: 'opportunities_stddev_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "opportunities" */
export type Opportunities_Stddev_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Opportunities_Stddev_Pop_Fields = {
  __typename?: 'opportunities_stddev_pop_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "opportunities" */
export type Opportunities_Stddev_Pop_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Opportunities_Stddev_Samp_Fields = {
  __typename?: 'opportunities_stddev_samp_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "opportunities" */
export type Opportunities_Stddev_Samp_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "opportunities" */
export type Opportunities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Opportunities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Opportunities_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  date_from?: InputMaybe<Scalars['date']['input']>;
  date_to?: InputMaybe<Scalars['date']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  display_status?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['uuid']['input']>;
  opportunity_id?: InputMaybe<Scalars['uuid']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  posted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Opportunities_Sum_Fields = {
  __typename?: 'opportunities_sum_fields';
  display_status?: Maybe<Scalars['Int']['output']>;
  slots?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "opportunities" */
export type Opportunities_Sum_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** update columns of table "opportunities" */
export enum Opportunities_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  DateFrom = 'date_from',
  /** column name */
  DateTo = 'date_to',
  /** column name */
  Detail = 'detail',
  /** column name */
  DisplayStatus = 'display_status',
  /** column name */
  Field = 'field',
  /** column name */
  ManagerId = 'manager_id',
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  PartnerId = 'partner_id',
  /** column name */
  PostedAt = 'posted_at',
  /** column name */
  Slots = 'slots',
}

export type Opportunities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Opportunities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Opportunities_Set_Input>;
  /** filter the rows which have to be updated */
  where: Opportunities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Opportunities_Var_Pop_Fields = {
  __typename?: 'opportunities_var_pop_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "opportunities" */
export type Opportunities_Var_Pop_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Opportunities_Var_Samp_Fields = {
  __typename?: 'opportunities_var_samp_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "opportunities" */
export type Opportunities_Var_Samp_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Opportunities_Variance_Fields = {
  __typename?: 'opportunities_variance_fields';
  display_status?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "opportunities" */
export type Opportunities_Variance_Order_By = {
  display_status?: InputMaybe<Order_By>;
  slots?: InputMaybe<Order_By>;
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
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  auth0_uid: Scalars['String']['output'];
  contact_email?: Maybe<Scalars['String']['output']>;
  contact_name?: Maybe<Scalars['String']['output']>;
  contact_phone?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  opportunities: Array<Opportunities>;
  /** An aggregate relationship */
  opportunities_aggregate: Opportunities_Aggregate;
  partner_id: Scalars['uuid']['output'];
  registered_at: Scalars['timestamptz']['output'];
};

/** columns and relationships of "partners" */
export type PartnersApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "partners" */
export type PartnersApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "partners" */
export type PartnersOpportunitiesArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

/** columns and relationships of "partners" */
export type PartnersOpportunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
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
  applications?: InputMaybe<Applications_Bool_Exp>;
  applications_aggregate?: InputMaybe<Applications_Aggregate_Bool_Exp>;
  auth0_uid?: InputMaybe<String_Comparison_Exp>;
  contact_email?: InputMaybe<String_Comparison_Exp>;
  contact_name?: InputMaybe<String_Comparison_Exp>;
  contact_phone?: InputMaybe<String_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  opportunities?: InputMaybe<Opportunities_Bool_Exp>;
  opportunities_aggregate?: InputMaybe<Opportunities_Aggregate_Bool_Exp>;
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
  applications?: InputMaybe<Applications_Arr_Rel_Insert_Input>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  opportunities?: InputMaybe<Opportunities_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "partners" */
export type Partners_Obj_Rel_Insert_Input = {
  data: Partners_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Partners_On_Conflict>;
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
  applications_aggregate?: InputMaybe<Applications_Aggregate_Order_By>;
  auth0_uid?: InputMaybe<Order_By>;
  contact_email?: InputMaybe<Order_By>;
  contact_name?: InputMaybe<Order_By>;
  contact_phone?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  opportunities_aggregate?: InputMaybe<Opportunities_Aggregate_Order_By>;
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
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table: "managers" */
  managers: Array<Managers>;
  /** fetch aggregated fields from the table: "managers" */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** An array relationship */
  opportunities: Array<Opportunities>;
  /** An aggregate relationship */
  opportunities_aggregate: Opportunities_Aggregate;
  /** fetch data from the table: "opportunities" using primary key columns */
  opportunities_by_pk?: Maybe<Opportunities>;
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

export type Query_RootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

export type Query_RootApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

export type Query_RootApplications_By_PkArgs = {
  application_id: Scalars['uuid']['input'];
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

export type Query_RootOpportunitiesArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

export type Query_RootOpportunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

export type Query_RootOpportunities_By_PkArgs = {
  opportunity_id: Scalars['uuid']['input'];
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
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  auth0_uid: Scalars['String']['output'];
  birthday?: Maybe<Scalars['date']['output']>;
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
  self_introduction?: Maybe<Scalars['String']['output']>;
};

/** columns and relationships of "students" */
export type StudentsApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

/** columns and relationships of "students" */
export type StudentsApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
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
  applications?: InputMaybe<Applications_Bool_Exp>;
  applications_aggregate?: InputMaybe<Applications_Aggregate_Bool_Exp>;
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
  self_introduction?: InputMaybe<String_Comparison_Exp>;
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
  applications?: InputMaybe<Applications_Arr_Rel_Insert_Input>;
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
  self_introduction?: InputMaybe<Scalars['String']['input']>;
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
  self_introduction?: Maybe<Scalars['String']['output']>;
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
  self_introduction?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "students" */
export type Students_Mutation_Response = {
  __typename?: 'students_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Students>;
};

/** input type for inserting object relation for remote table "students" */
export type Students_Obj_Rel_Insert_Input = {
  data: Students_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Students_On_Conflict>;
};

/** on_conflict condition type for table "students" */
export type Students_On_Conflict = {
  constraint: Students_Constraint;
  update_columns?: Array<Students_Update_Column>;
  where?: InputMaybe<Students_Bool_Exp>;
};

/** Ordering options when selecting data from "students". */
export type Students_Order_By = {
  applications_aggregate?: InputMaybe<Applications_Aggregate_Order_By>;
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
  self_introduction?: InputMaybe<Order_By>;
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
  /** column name */
  SelfIntroduction = 'self_introduction',
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
  self_introduction?: InputMaybe<Scalars['String']['input']>;
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
  self_introduction?: InputMaybe<Scalars['String']['input']>;
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
  /** column name */
  SelfIntroduction = 'self_introduction',
}

export type Students_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Students_Set_Input>;
  /** filter the rows which have to be updated */
  where: Students_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applications_aggregate: Applications_Aggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applications_by_pk?: Maybe<Applications>;
  /** fetch data from the table in a streaming manner: "applications" */
  applications_stream: Array<Applications>;
  /** fetch data from the table: "managers" */
  managers: Array<Managers>;
  /** fetch aggregated fields from the table: "managers" */
  managers_aggregate: Managers_Aggregate;
  /** fetch data from the table: "managers" using primary key columns */
  managers_by_pk?: Maybe<Managers>;
  /** fetch data from the table in a streaming manner: "managers" */
  managers_stream: Array<Managers>;
  /** An array relationship */
  opportunities: Array<Opportunities>;
  /** An aggregate relationship */
  opportunities_aggregate: Opportunities_Aggregate;
  /** fetch data from the table: "opportunities" using primary key columns */
  opportunities_by_pk?: Maybe<Opportunities>;
  /** fetch data from the table in a streaming manner: "opportunities" */
  opportunities_stream: Array<Opportunities>;
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

export type Subscription_RootApplicationsArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

export type Subscription_RootApplications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Applications_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Applications_Order_By>>;
  where?: InputMaybe<Applications_Bool_Exp>;
};

export type Subscription_RootApplications_By_PkArgs = {
  application_id: Scalars['uuid']['input'];
};

export type Subscription_RootApplications_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Applications_Stream_Cursor_Input>>;
  where?: InputMaybe<Applications_Bool_Exp>;
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

export type Subscription_RootOpportunitiesArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

export type Subscription_RootOpportunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Opportunities_Order_By>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
};

export type Subscription_RootOpportunities_By_PkArgs = {
  opportunity_id: Scalars['uuid']['input'];
};

export type Subscription_RootOpportunities_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Opportunities_Stream_Cursor_Input>>;
  where?: InputMaybe<Opportunities_Bool_Exp>;
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

export type AddApplicationMutationVariables = Exact<{
  student_id: Scalars['uuid']['input'];
  opportunity_id: Scalars['uuid']['input'];
  partner_id: Scalars['uuid']['input'];
}>;

export type AddApplicationMutation = {
  __typename?: 'mutation_root';
  insert_applications_one?: {
    __typename?: 'applications';
    application_id: any;
  } | null;
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

export type AddOpportunityMutationVariables = Exact<{
  city?: InputMaybe<Scalars['String']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  date_start?: InputMaybe<Scalars['date']['input']>;
  date_end?: InputMaybe<Scalars['date']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  partner_id?: InputMaybe<Scalars['uuid']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
}>;

export type AddOpportunityMutation = {
  __typename?: 'mutation_root';
  insert_opportunities_one?: {
    __typename?: 'opportunities';
    opportunity_id: any;
  } | null;
};

export type AddPartnerProfileMutationVariables = Exact<{
  display_name?: InputMaybe<Scalars['String']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  c_name?: InputMaybe<Scalars['String']['input']>;
  c_email?: InputMaybe<Scalars['String']['input']>;
  c_tel?: InputMaybe<Scalars['String']['input']>;
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
}>;

export type AddPartnerProfileMutation = {
  __typename?: 'mutation_root';
  insert_partners_one?: { __typename?: 'partners'; partner_id: any } | null;
};

export type AddStudentProfileMutationVariables = Exact<{
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  passport_no: Scalars['String']['input'];
  passport_country: Scalars['String']['input'];
  passport_expires: Scalars['date']['input'];
  birthday: Scalars['date']['input'];
  department: Scalars['String']['input'];
  major: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  self_introduction: Scalars['String']['input'];
  auth0_uid?: InputMaybe<Scalars['String']['input']>;
}>;

export type AddStudentProfileMutation = {
  __typename?: 'mutation_root';
  insert_students_one?: { __typename?: 'students'; client_id: any } | null;
};

export type ApproveRejectOpportunityMutationVariables = Exact<{
  opportunity_id: Scalars['uuid']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  manager_id: Scalars['uuid']['input'];
}>;

export type ApproveRejectOpportunityMutation = {
  __typename?: 'mutation_root';
  update_opportunities_by_pk?: {
    __typename?: 'opportunities';
    opportunity_id: any;
  } | null;
};

export type DeleteOpportunityMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;

export type DeleteOpportunityMutation = {
  __typename?: 'mutation_root';
  delete_opportunities_by_pk?: {
    __typename?: 'opportunities';
    opportunity_id: any;
  } | null;
};

export type GetAllApplicationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllApplicationsQuery = {
  __typename?: 'query_root';
  applications: Array<{
    __typename?: 'applications';
    application_id: any;
    applied_at: any;
    display_status?: number | null;
    student: {
      __typename?: 'students';
      passport_no?: string | null;
      birthday?: any | null;
      client_id: any;
      department?: string | null;
      email?: string | null;
      gender?: string | null;
      major?: string | null;
      name?: string | null;
      passport_country?: string | null;
      passport_expires?: any | null;
      phone?: string | null;
    };
    partner: { __typename?: 'partners'; display_name?: string | null };
    opportunity: { __typename?: 'opportunities'; field?: string | null };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  }>;
};

export type GetApplicationQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;

export type GetApplicationQuery = {
  __typename?: 'query_root';
  applications_by_pk?: {
    __typename?: 'applications';
    application_id: any;
    partner_id: any;
    manager_id?: any | null;
    applied_at: any;
    display_status?: number | null;
    student: {
      __typename?: 'students';
      passport_no?: string | null;
      birthday?: any | null;
      client_id: any;
      department?: string | null;
      email?: string | null;
      gender?: string | null;
      major?: string | null;
      name?: string | null;
      passport_country?: string | null;
      passport_expires?: any | null;
      phone?: string | null;
      self_introduction?: string | null;
    };
    opportunity: {
      __typename?: 'opportunities';
      detail?: string | null;
      slots?: number | null;
      city: string;
      date_from: any;
      date_to: any;
      opportunity_id: any;
      posted_at: any;
      field?: string | null;
    };
    partner: {
      __typename?: 'partners';
      address_country?: string | null;
      address_line1?: string | null;
      address_line2?: string | null;
      address_zipcode?: string | null;
      display_name?: string | null;
    };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  } | null;
};

export type GetApplicationsQueryVariables = Exact<{
  opportunity_id: Scalars['uuid']['input'];
}>;

export type GetApplicationsQuery = {
  __typename?: 'query_root';
  applications: Array<{
    __typename?: 'applications';
    application_id: any;
    applied_at: any;
    display_status?: number | null;
    student: {
      __typename?: 'students';
      passport_no?: string | null;
      birthday?: any | null;
      client_id: any;
      department?: string | null;
      email?: string | null;
      gender?: string | null;
      major?: string | null;
      name?: string | null;
      passport_country?: string | null;
      passport_expires?: any | null;
      phone?: string | null;
    };
    opportunity: { __typename?: 'opportunities'; field?: string | null };
    partner: { __typename?: 'partners'; display_name?: string | null };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  }>;
};

export type GetManagerProfileQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['uuid']['input']>;
}>;

export type GetManagerProfileQuery = {
  __typename?: 'query_root';
  managers: Array<{
    __typename?: 'managers';
    name?: string | null;
    manager_id: any;
    email?: string | null;
    phone?: string | null;
  }>;
};

export type GetOpportunitiesQueryVariables = Exact<{ [key: string]: never }>;

export type GetOpportunitiesQuery = {
  __typename?: 'query_root';
  opportunities: Array<{
    __typename?: 'opportunities';
    detail?: string | null;
    display_status?: number | null;
    manager_id?: any | null;
    slots?: number | null;
    city: string;
    date_from: any;
    date_to: any;
    opportunity_id: any;
    partner_id: any;
    field?: string | null;
    posted_at: any;
    partner: {
      __typename?: 'partners';
      display_name?: string | null;
      address_country?: string | null;
    };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  }>;
};

export type GetOpportunityQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;

export type GetOpportunityQuery = {
  __typename?: 'query_root';
  opportunities_by_pk?: {
    __typename?: 'opportunities';
    detail?: string | null;
    display_status?: number | null;
    manager_id?: any | null;
    slots?: number | null;
    city: string;
    date_from: any;
    date_to: any;
    opportunity_id: any;
    partner_id: any;
    field?: string | null;
    posted_at: any;
    partner: {
      __typename?: 'partners';
      address_country?: string | null;
      address_line1?: string | null;
      address_line2?: string | null;
      address_zipcode?: string | null;
      display_name?: string | null;
    };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  } | null;
};

export type GetOpportunityApplicationsQueryVariables = Exact<{
  opportunity_id: Scalars['uuid']['input'];
}>;

export type GetOpportunityApplicationsQuery = {
  __typename?: 'query_root';
  opportunities_by_pk?: {
    __typename?: 'opportunities';
    detail?: string | null;
    display_status?: number | null;
    manager_id?: any | null;
    slots?: number | null;
    city: string;
    date_from: any;
    date_to: any;
    opportunity_id: any;
    partner_id: any;
    posted_at: any;
    field?: string | null;
    partner: {
      __typename?: 'partners';
      address_country?: string | null;
      address_line1?: string | null;
      address_line2?: string | null;
      address_zipcode?: string | null;
      display_name?: string | null;
    };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
  } | null;
  applications: Array<{
    __typename?: 'applications';
    application_id: any;
    applied_at: any;
    display_status?: number | null;
    student: {
      __typename?: 'students';
      passport_no?: string | null;
      birthday?: any | null;
      client_id: any;
      department?: string | null;
      email?: string | null;
      gender?: string | null;
      major?: string | null;
      name?: string | null;
      passport_country?: string | null;
      passport_expires?: any | null;
      phone?: string | null;
    };
    partner: { __typename?: 'partners'; display_name?: string | null };
    manager?: { __typename?: 'managers'; name?: string | null } | null;
    opportunity: { __typename?: 'opportunities'; field?: string | null };
  }>;
};

export type GetPartnerProfileQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['uuid']['input']>;
}>;

export type GetPartnerProfileQuery = {
  __typename?: 'query_root';
  partners: Array<{
    __typename?: 'partners';
    partner_id: any;
    display_name?: string | null;
    address_zipcode?: string | null;
    address_country?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    contact_name?: string | null;
    contact_email?: string | null;
    contact_phone?: string | null;
  }>;
};

export type GetStudentProfileQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['uuid']['input']>;
}>;

export type GetStudentProfileQuery = {
  __typename?: 'query_root';
  students: Array<{
    __typename?: 'students';
    passport_no?: string | null;
    birthday?: any | null;
    client_id: any;
    department?: string | null;
    email?: string | null;
    gender?: string | null;
    major?: string | null;
    name?: string | null;
    passport_country?: string | null;
    passport_expires?: any | null;
    phone?: string | null;
    self_introduction?: string | null;
  }>;
};

export type UpdateApplicationStatusMutationVariables = Exact<{
  application_id: Scalars['uuid']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  manager_id: Scalars['uuid']['input'];
}>;

export type UpdateApplicationStatusMutation = {
  __typename?: 'mutation_root';
  update_applications_by_pk?: {
    __typename?: 'applications';
    application_id: any;
  } | null;
};

export type UpdateManagerProfileMutationVariables = Exact<{
  uid: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phone: Scalars['String']['input'];
}>;

export type UpdateManagerProfileMutation = {
  __typename?: 'mutation_root';
  update_managers_by_pk?: { __typename?: 'managers'; manager_id: any } | null;
};

export type UpdateOpportunityMutationVariables = Exact<{
  opportunity_id: Scalars['uuid']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  slots?: InputMaybe<Scalars['Int']['input']>;
  date_start?: InputMaybe<Scalars['date']['input']>;
  date_end?: InputMaybe<Scalars['date']['input']>;
  detail?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateOpportunityMutation = {
  __typename?: 'mutation_root';
  update_opportunities_by_pk?: {
    __typename?: 'opportunities';
    opportunity_id: any;
  } | null;
};

export type UpdateOpportunityStatusMutationVariables = Exact<{
  opportunity_id: Scalars['uuid']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpdateOpportunityStatusMutation = {
  __typename?: 'mutation_root';
  update_opportunities_by_pk?: {
    __typename?: 'opportunities';
    opportunity_id: any;
  } | null;
};

export type UpdatePartnerProfileMutationVariables = Exact<{
  uid: Scalars['uuid']['input'];
  display_name?: InputMaybe<Scalars['String']['input']>;
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  c_name?: InputMaybe<Scalars['String']['input']>;
  c_email?: InputMaybe<Scalars['String']['input']>;
  c_tel?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdatePartnerProfileMutation = {
  __typename?: 'mutation_root';
  update_partners_by_pk?: { __typename?: 'partners'; partner_id: any } | null;
};

export type UpdateStudentProfileMutationVariables = Exact<{
  uid: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  passport_no: Scalars['String']['input'];
  passport_country: Scalars['String']['input'];
  passport_expires: Scalars['date']['input'];
  birthday: Scalars['date']['input'];
  department: Scalars['String']['input'];
  major: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  self_introduction: Scalars['String']['input'];
}>;

export type UpdateStudentProfileMutation = {
  __typename?: 'mutation_root';
  update_students_by_pk?: { __typename?: 'students'; client_id: any } | null;
};

export const AddApplicationDocument = gql`
  mutation AddApplication(
    $student_id: uuid!
    $opportunity_id: uuid!
    $partner_id: uuid!
  ) {
    insert_applications_one(
      object: {
        student_id: $student_id
        opportunity_id: $opportunity_id
        partner_id: $partner_id
        display_status: 0
      }
    ) {
      application_id
    }
  }
`;

export function useAddApplicationMutation() {
  return Urql.useMutation<
    AddApplicationMutation,
    AddApplicationMutationVariables
  >(AddApplicationDocument);
}
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
export const AddOpportunityDocument = gql`
  mutation AddOpportunity(
    $city: String
    $slots: Int
    $date_start: date
    $date_end: date
    $detail: String
    $partner_id: uuid
    $status: Int
    $field: String
  ) {
    insert_opportunities_one(
      object: {
        city: $city
        slots: $slots
        date_from: $date_start
        date_to: $date_end
        detail: $detail
        partner_id: $partner_id
        display_status: $status
        field: $field
      }
    ) {
      opportunity_id
    }
  }
`;

export function useAddOpportunityMutation() {
  return Urql.useMutation<
    AddOpportunityMutation,
    AddOpportunityMutationVariables
  >(AddOpportunityDocument);
}
export const AddPartnerProfileDocument = gql`
  mutation AddPartnerProfile(
    $display_name: String
    $address1: String
    $address2: String
    $zip_code: String
    $country: String
    $c_name: String
    $c_email: String
    $c_tel: String
    $auth0_uid: String
  ) {
    insert_partners_one(
      object: {
        display_name: $display_name
        address_zipcode: $zip_code
        address_country: $country
        address_line1: $address1
        address_line2: $address2
        contact_name: $c_name
        contact_email: $c_email
        contact_phone: $c_tel
        auth0_uid: $auth0_uid
      }
    ) {
      partner_id
    }
  }
`;

export function useAddPartnerProfileMutation() {
  return Urql.useMutation<
    AddPartnerProfileMutation,
    AddPartnerProfileMutationVariables
  >(AddPartnerProfileDocument);
}
export const AddStudentProfileDocument = gql`
  mutation AddStudentProfile(
    $name: String!
    $phone: String!
    $passport_no: String!
    $passport_country: String!
    $passport_expires: date!
    $birthday: date!
    $department: String!
    $major: String!
    $email: String!
    $gender: String!
    $self_introduction: String!
    $auth0_uid: String
  ) {
    insert_students_one(
      object: {
        name: $name
        phone: $phone
        passport_no: $passport_no
        passport_country: $passport_country
        passport_expires: $passport_expires
        birthday: $birthday
        department: $department
        major: $major
        email: $email
        gender: $gender
        self_introduction: $self_introduction
        auth0_uid: $auth0_uid
      }
    ) {
      client_id
    }
  }
`;

export function useAddStudentProfileMutation() {
  return Urql.useMutation<
    AddStudentProfileMutation,
    AddStudentProfileMutationVariables
  >(AddStudentProfileDocument);
}
export const ApproveRejectOpportunityDocument = gql`
  mutation ApproveRejectOpportunity(
    $opportunity_id: uuid!
    $status: Int
    $manager_id: uuid!
  ) {
    update_opportunities_by_pk(
      pk_columns: { opportunity_id: $opportunity_id }
      _set: { display_status: $status, manager_id: $manager_id }
    ) {
      opportunity_id
    }
  }
`;

export function useApproveRejectOpportunityMutation() {
  return Urql.useMutation<
    ApproveRejectOpportunityMutation,
    ApproveRejectOpportunityMutationVariables
  >(ApproveRejectOpportunityDocument);
}
export const DeleteOpportunityDocument = gql`
  mutation DeleteOpportunity($id: uuid!) {
    delete_opportunities_by_pk(opportunity_id: $id) {
      opportunity_id
    }
  }
`;

export function useDeleteOpportunityMutation() {
  return Urql.useMutation<
    DeleteOpportunityMutation,
    DeleteOpportunityMutationVariables
  >(DeleteOpportunityDocument);
}
export const GetAllApplicationsDocument = gql`
  query GetAllApplications {
    applications {
      application_id
      student {
        passport_no
        birthday
        client_id
        department
        email
        gender
        major
        name
        passport_country
        passport_expires
        phone
      }
      partner {
        display_name
      }
      opportunity {
        field
      }
      manager {
        name
      }
      applied_at
      display_status
    }
  }
`;

export function useGetAllApplicationsQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllApplicationsQueryVariables>, 'query'>
) {
  return Urql.useQuery<
    GetAllApplicationsQuery,
    GetAllApplicationsQueryVariables
  >({ query: GetAllApplicationsDocument, ...options });
}
export const GetApplicationDocument = gql`
  query GetApplication($id: uuid!) {
    applications_by_pk(application_id: $id) {
      application_id
      partner_id
      manager_id
      student {
        passport_no
        birthday
        client_id
        department
        email
        gender
        major
        name
        passport_country
        passport_expires
        phone
        self_introduction
      }
      opportunity {
        detail
        slots
        city
        date_from
        date_to
        opportunity_id
        posted_at
        field
      }
      partner {
        address_country
        address_line1
        address_line2
        address_zipcode
        display_name
      }
      manager {
        name
      }
      applied_at
      display_status
    }
  }
`;

export function useGetApplicationQuery(
  options: Omit<Urql.UseQueryArgs<GetApplicationQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetApplicationQuery, GetApplicationQueryVariables>({
    query: GetApplicationDocument,
    ...options,
  });
}
export const GetApplicationsDocument = gql`
  query GetApplications($opportunity_id: uuid!) {
    applications(where: { opportunity_id: { _eq: $opportunity_id } }) {
      application_id
      student {
        passport_no
        birthday
        client_id
        department
        email
        gender
        major
        name
        passport_country
        passport_expires
        phone
      }
      opportunity {
        field
      }
      partner {
        display_name
      }
      manager {
        name
      }
      applied_at
      display_status
    }
  }
`;

export function useGetApplicationsQuery(
  options: Omit<Urql.UseQueryArgs<GetApplicationsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetApplicationsQuery, GetApplicationsQueryVariables>({
    query: GetApplicationsDocument,
    ...options,
  });
}
export const GetManagerProfileDocument = gql`
  query GetManagerProfile($uid: uuid) {
    managers(where: { manager_id: { _eq: $uid } }) {
      name
      manager_id
      email
      phone
    }
  }
`;

export function useGetManagerProfileQuery(
  options?: Omit<Urql.UseQueryArgs<GetManagerProfileQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetManagerProfileQuery, GetManagerProfileQueryVariables>(
    { query: GetManagerProfileDocument, ...options }
  );
}
export const GetOpportunitiesDocument = gql`
  query GetOpportunities {
    opportunities {
      detail
      display_status
      manager_id
      slots
      city
      date_from
      date_to
      opportunity_id
      partner_id
      field
      posted_at
      partner {
        display_name
        address_country
      }
      manager {
        name
      }
    }
  }
`;

export function useGetOpportunitiesQuery(
  options?: Omit<Urql.UseQueryArgs<GetOpportunitiesQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetOpportunitiesQuery, GetOpportunitiesQueryVariables>({
    query: GetOpportunitiesDocument,
    ...options,
  });
}
export const GetOpportunityDocument = gql`
  query GetOpportunity($id: uuid!) {
    opportunities_by_pk(opportunity_id: $id) {
      detail
      display_status
      manager_id
      slots
      city
      date_from
      date_to
      opportunity_id
      partner_id
      field
      posted_at
      partner {
        address_country
        address_line1
        address_line2
        address_zipcode
        display_name
      }
      manager {
        name
      }
    }
  }
`;

export function useGetOpportunityQuery(
  options: Omit<Urql.UseQueryArgs<GetOpportunityQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetOpportunityQuery, GetOpportunityQueryVariables>({
    query: GetOpportunityDocument,
    ...options,
  });
}
export const GetOpportunityApplicationsDocument = gql`
  query GetOpportunityApplications($opportunity_id: uuid!) {
    opportunities_by_pk(opportunity_id: $opportunity_id) {
      detail
      display_status
      manager_id
      slots
      city
      date_from
      date_to
      opportunity_id
      partner_id
      posted_at
      partner {
        address_country
        address_line1
        address_line2
        address_zipcode
        display_name
      }
      field
      manager {
        name
      }
    }
    applications(where: { opportunity_id: { _eq: $opportunity_id } }) {
      application_id
      student {
        passport_no
        birthday
        client_id
        department
        email
        gender
        major
        name
        passport_country
        passport_expires
        phone
      }
      partner {
        display_name
      }
      manager {
        name
      }
      opportunity {
        field
      }
      applied_at
      display_status
    }
  }
`;

export function useGetOpportunityApplicationsQuery(
  options: Omit<
    Urql.UseQueryArgs<GetOpportunityApplicationsQueryVariables>,
    'query'
  >
) {
  return Urql.useQuery<
    GetOpportunityApplicationsQuery,
    GetOpportunityApplicationsQueryVariables
  >({ query: GetOpportunityApplicationsDocument, ...options });
}
export const GetPartnerProfileDocument = gql`
  query GetPartnerProfile($uid: uuid) {
    partners(where: { partner_id: { _eq: $uid } }) {
      partner_id
      display_name
      address_zipcode
      address_country
      address_line1
      address_line2
      contact_name
      contact_email
      contact_phone
    }
  }
`;

export function useGetPartnerProfileQuery(
  options?: Omit<Urql.UseQueryArgs<GetPartnerProfileQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPartnerProfileQuery, GetPartnerProfileQueryVariables>(
    { query: GetPartnerProfileDocument, ...options }
  );
}
export const GetStudentProfileDocument = gql`
  query GetStudentProfile($uid: uuid) {
    students(where: { client_id: { _eq: $uid } }) {
      passport_no
      birthday
      client_id
      department
      email
      gender
      major
      name
      passport_country
      passport_expires
      phone
      self_introduction
    }
  }
`;

export function useGetStudentProfileQuery(
  options?: Omit<Urql.UseQueryArgs<GetStudentProfileQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetStudentProfileQuery, GetStudentProfileQueryVariables>(
    { query: GetStudentProfileDocument, ...options }
  );
}
export const UpdateApplicationStatusDocument = gql`
  mutation UpdateApplicationStatus(
    $application_id: uuid!
    $status: Int
    $manager_id: uuid!
  ) {
    update_applications_by_pk(
      pk_columns: { application_id: $application_id }
      _set: { display_status: $status, manager_id: $manager_id }
    ) {
      application_id
    }
  }
`;

export function useUpdateApplicationStatusMutation() {
  return Urql.useMutation<
    UpdateApplicationStatusMutation,
    UpdateApplicationStatusMutationVariables
  >(UpdateApplicationStatusDocument);
}
export const UpdateManagerProfileDocument = gql`
  mutation UpdateManagerProfile(
    $uid: uuid!
    $name: String!
    $email: String!
    $phone: String!
  ) {
    update_managers_by_pk(
      pk_columns: { manager_id: $uid }
      _set: { email: $email, name: $name, phone: $phone }
    ) {
      manager_id
    }
  }
`;

export function useUpdateManagerProfileMutation() {
  return Urql.useMutation<
    UpdateManagerProfileMutation,
    UpdateManagerProfileMutationVariables
  >(UpdateManagerProfileDocument);
}
export const UpdateOpportunityDocument = gql`
  mutation UpdateOpportunity(
    $opportunity_id: uuid!
    $city: String
    $slots: Int
    $date_start: date
    $date_end: date
    $detail: String
    $status: Int
    $field: String
  ) {
    update_opportunities_by_pk(
      pk_columns: { opportunity_id: $opportunity_id }
      _set: {
        city: $city
        slots: $slots
        date_from: $date_start
        date_to: $date_end
        detail: $detail
        display_status: $status
        field: $field
      }
    ) {
      opportunity_id
    }
  }
`;

export function useUpdateOpportunityMutation() {
  return Urql.useMutation<
    UpdateOpportunityMutation,
    UpdateOpportunityMutationVariables
  >(UpdateOpportunityDocument);
}
export const UpdateOpportunityStatusDocument = gql`
  mutation UpdateOpportunityStatus($opportunity_id: uuid!, $status: Int) {
    update_opportunities_by_pk(
      pk_columns: { opportunity_id: $opportunity_id }
      _set: { display_status: $status }
    ) {
      opportunity_id
    }
  }
`;

export function useUpdateOpportunityStatusMutation() {
  return Urql.useMutation<
    UpdateOpportunityStatusMutation,
    UpdateOpportunityStatusMutationVariables
  >(UpdateOpportunityStatusDocument);
}
export const UpdatePartnerProfileDocument = gql`
  mutation UpdatePartnerProfile(
    $uid: uuid!
    $display_name: String
    $address1: String
    $address2: String
    $zip_code: String
    $country: String
    $c_name: String
    $c_email: String
    $c_tel: String
  ) {
    update_partners_by_pk(
      pk_columns: { partner_id: $uid }
      _set: {
        display_name: $display_name
        address_zipcode: $zip_code
        address_country: $country
        address_line1: $address1
        address_line2: $address2
        contact_name: $c_name
        contact_email: $c_email
        contact_phone: $c_tel
      }
    ) {
      partner_id
    }
  }
`;

export function useUpdatePartnerProfileMutation() {
  return Urql.useMutation<
    UpdatePartnerProfileMutation,
    UpdatePartnerProfileMutationVariables
  >(UpdatePartnerProfileDocument);
}
export const UpdateStudentProfileDocument = gql`
  mutation UpdateStudentProfile(
    $uid: uuid!
    $name: String!
    $phone: String!
    $passport_no: String!
    $passport_country: String!
    $passport_expires: date!
    $birthday: date!
    $department: String!
    $major: String!
    $email: String!
    $gender: String!
    $self_introduction: String!
  ) {
    update_students_by_pk(
      pk_columns: { client_id: $uid }
      _set: {
        name: $name
        phone: $phone
        passport_no: $passport_no
        passport_country: $passport_country
        passport_expires: $passport_expires
        birthday: $birthday
        department: $department
        major: $major
        email: $email
        gender: $gender
        self_introduction: $self_introduction
      }
    ) {
      client_id
    }
  }
`;

export function useUpdateStudentProfileMutation() {
  return Urql.useMutation<
    UpdateStudentProfileMutation,
    UpdateStudentProfileMutationVariables
  >(UpdateStudentProfileDocument);
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
        name: 'applications',
        fields: [
          {
            name: 'application_id',
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
            name: 'applied_at',
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
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'manager',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
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
            name: 'opportunity',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'opportunity_id',
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
            name: 'partner',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'partners',
                ofType: null,
              },
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
            name: 'student',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'students',
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: 'student_id',
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
        name: 'applications_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'applications_aggregate_fields',
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
                    name: 'applications',
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
        name: 'applications_aggregate_fields',
        fields: [
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'applications_avg_fields',
              ofType: null,
            },
            args: [],
          },
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
              name: 'applications_max_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'applications_min_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev',
            type: {
              kind: 'OBJECT',
              name: 'applications_stddev_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'OBJECT',
              name: 'applications_stddev_pop_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'OBJECT',
              name: 'applications_stddev_samp_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'applications_sum_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'var_pop',
            type: {
              kind: 'OBJECT',
              name: 'applications_var_pop_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'var_samp',
            type: {
              kind: 'OBJECT',
              name: 'applications_var_samp_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'variance',
            type: {
              kind: 'OBJECT',
              name: 'applications_variance_fields',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'applications_avg_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_max_fields',
        fields: [
          {
            name: 'application_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'applied_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_status',
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
            name: 'opportunity_id',
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
            name: 'student_id',
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
        name: 'applications_min_fields',
        fields: [
          {
            name: 'application_id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'applied_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_status',
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
            name: 'opportunity_id',
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
            name: 'student_id',
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
        name: 'applications_mutation_response',
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
                    name: 'applications',
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
        name: 'applications_stddev_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_stddev_pop_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_stddev_samp_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_sum_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_var_pop_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_var_samp_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'applications_variance_fields',
        fields: [
          {
            name: 'display_status',
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
        name: 'managers',
        fields: [
          {
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
            name: 'opportunities',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'opportunities',
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
            name: 'opportunities_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities_aggregate',
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
            name: 'delete_applications',
            type: {
              kind: 'OBJECT',
              name: 'applications_mutation_response',
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
            name: 'delete_applications_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'applications',
              ofType: null,
            },
            args: [
              {
                name: 'application_id',
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
            name: 'delete_opportunities',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_mutation_response',
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
            name: 'delete_opportunities_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'opportunities',
              ofType: null,
            },
            args: [
              {
                name: 'opportunity_id',
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
            name: 'insert_applications',
            type: {
              kind: 'OBJECT',
              name: 'applications_mutation_response',
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
            name: 'insert_applications_one',
            type: {
              kind: 'OBJECT',
              name: 'applications',
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
            name: 'insert_opportunities',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_mutation_response',
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
            name: 'insert_opportunities_one',
            type: {
              kind: 'OBJECT',
              name: 'opportunities',
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
            name: 'update_applications',
            type: {
              kind: 'OBJECT',
              name: 'applications_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
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
            name: 'update_applications_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'applications',
              ofType: null,
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
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
            name: 'update_applications_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_mutation_response',
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
            name: 'update_opportunities',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_mutation_response',
              ofType: null,
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
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
            name: 'update_opportunities_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'opportunities',
              ofType: null,
            },
            args: [
              {
                name: '_inc',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
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
            name: 'update_opportunities_many',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities_mutation_response',
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
        name: 'opportunities',
        fields: [
          {
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
            name: 'city',
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
            name: 'date_from',
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
            name: 'date_to',
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
            name: 'detail',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'field',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'manager',
            type: {
              kind: 'OBJECT',
              name: 'managers',
              ofType: null,
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
            name: 'opportunity_id',
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
            name: 'partner',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'partners',
                ofType: null,
              },
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
            name: 'posted_at',
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
            name: 'slots',
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
        name: 'opportunities_aggregate',
        fields: [
          {
            name: 'aggregate',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_aggregate_fields',
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
                    name: 'opportunities',
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
        name: 'opportunities_aggregate_fields',
        fields: [
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_avg_fields',
              ofType: null,
            },
            args: [],
          },
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
              name: 'opportunities_max_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_min_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_stddev_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev_pop',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_stddev_pop_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'stddev_samp',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_stddev_samp_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_sum_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'var_pop',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_var_pop_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'var_samp',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_var_samp_fields',
              ofType: null,
            },
            args: [],
          },
          {
            name: 'variance',
            type: {
              kind: 'OBJECT',
              name: 'opportunities_variance_fields',
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'opportunities_avg_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_max_fields',
        fields: [
          {
            name: 'city',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'date_from',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'date_to',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'detail',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'field',
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
            name: 'opportunity_id',
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
            name: 'posted_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_min_fields',
        fields: [
          {
            name: 'city',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'date_from',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'date_to',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'detail',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'field',
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
            name: 'opportunity_id',
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
            name: 'posted_at',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_mutation_response',
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
                    name: 'opportunities',
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
        name: 'opportunities_stddev_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_stddev_pop_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_stddev_samp_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_sum_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_var_pop_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_var_samp_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
        name: 'opportunities_variance_fields',
        fields: [
          {
            name: 'display_status',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'slots',
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
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
            name: 'opportunities',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'opportunities',
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
            name: 'opportunities_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities_aggregate',
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
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
            name: 'applications_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'applications',
              ofType: null,
            },
            args: [
              {
                name: 'application_id',
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
            name: 'opportunities',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'opportunities',
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
            name: 'opportunities_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities_aggregate',
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
            name: 'opportunities_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'opportunities',
              ofType: null,
            },
            args: [
              {
                name: 'opportunity_id',
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
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
              kind: 'SCALAR',
              name: 'Any',
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
          {
            name: 'self_introduction',
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
          {
            name: 'self_introduction',
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
          {
            name: 'self_introduction',
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
            name: 'applications',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'applications_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'applications_aggregate',
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
            name: 'applications_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'applications',
              ofType: null,
            },
            args: [
              {
                name: 'application_id',
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
            name: 'applications_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'applications',
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
            name: 'opportunities',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'opportunities',
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
            name: 'opportunities_aggregate',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'opportunities_aggregate',
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
            name: 'opportunities_by_pk',
            type: {
              kind: 'OBJECT',
              name: 'opportunities',
              ofType: null,
            },
            args: [
              {
                name: 'opportunity_id',
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
            name: 'opportunities_stream',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'opportunities',
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
