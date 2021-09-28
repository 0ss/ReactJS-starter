import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddProjectMemberInput = {
  memeberEmail: Scalars['String'];
  projectId: Scalars['String'];
  role: UserProjectRole;
};

export type CreateProjectInput = {
  name: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  archived: Scalars['Boolean'];
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  emoji?: Maybe<FeedbackEmoji>;
  id: Scalars['String'];
  metadata: Scalars['String'];
  page: Scalars['String'];
  project?: Maybe<Project>;
  source?: Maybe<Source>;
  type: FeedbackType;
};

/** The text identifers that refer to emojies */
export enum FeedbackEmoji {
  Happy = 'happy',
  Neutral = 'neutral',
  Sad = 'sad',
  Veryhappy = 'veryhappy',
  Verysad = 'verysad'
}

/** The feedback types, default is an issue cuz it's more convenient */
export enum FeedbackType {
  Idea = 'idea',
  Issue = 'issue',
  Other = 'other'
}

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addProjectMember: Project;
  createProject: Project;
  loginUser: UserToken;
  resetPassword: Scalars['Boolean'];
  signupUser: UserToken;
  updateFeedback: Feedback;
};


export type MutationAddProjectMemberArgs = {
  addProjectMember: AddProjectMemberInput;
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};


export type MutationLoginUserArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSignupUserArgs = {
  signupUserInput: SignupUserInput;
};


export type MutationUpdateFeedbackArgs = {
  updateFeedbackInput: UpdateFeedbackInput;
};

export enum OAuthProvider {
  Githbu = 'githbu',
  Google = 'google'
}

export type Project = {
  __typename?: 'Project';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  projectMember: Array<ProjectMember>;
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  role: UserProjectRole;
  user: User;
};

export type Query = {
  __typename?: 'Query';
  feedback: Array<Feedback>;
  project?: Maybe<Project>;
  user: User;
};


export type QueryFeedbackArgs = {
  projectId: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};

export type SignupUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Source = {
  __typename?: 'Source';
  browser?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  device?: Maybe<SourceDevice>;
  id: Scalars['String'];
  os?: Maybe<Scalars['String']>;
};

export enum SourceDevice {
  Desktop = 'desktop',
  Smartphone = 'smartphone'
}

export type UpdateFeedbackInput = {
  archived: Scalars['Boolean'];
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  oauth_id?: Maybe<Scalars['String']>;
  oauth_provider?: Maybe<OAuthProvider>;
  userProject: Array<UserProject>;
};

export type UserProject = {
  __typename?: 'UserProject';
  project: Project;
  role: UserProjectRole;
};

/** the role of the user on a project */
export enum UserProjectRole {
  Admin = 'admin',
  User = 'user'
}

export type UserToken = {
  __typename?: 'UserToken';
  token: Scalars['String'];
  user: User;
};

export type LoginUserMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserToken', token: string, user: { __typename?: 'User', created_at: any, email: string, id: string, name: string, oauth_id?: Maybe<string>, oauth_provider?: Maybe<OAuthProvider>, userProject: Array<{ __typename?: 'UserProject', role: UserProjectRole, project: { __typename?: 'Project', created_at: any, id: string, name: string, projectMember: Array<{ __typename?: 'ProjectMember', role: UserProjectRole }> } }> } } };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type SignupUserMutationVariables = Exact<{
  signupUserInput: SignupUserInput;
}>;


export type SignupUserMutation = { __typename?: 'Mutation', signupUser: { __typename?: 'UserToken', token: string, user: { __typename?: 'User', created_at: any, email: string, id: string, name: string, oauth_id?: Maybe<string>, oauth_provider?: Maybe<OAuthProvider> } } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', created_at: any, email: string, id: string, name: string, oauth_id?: Maybe<string>, oauth_provider?: Maybe<OAuthProvider>, userProject: Array<{ __typename?: 'UserProject', role: UserProjectRole, project: { __typename?: 'Project', created_at: any, id: string, name: string, projectMember: Array<{ __typename?: 'ProjectMember', role: UserProjectRole, user: { __typename?: 'User', created_at: any, email: string, id: string, name: string, oauth_id?: Maybe<string>, oauth_provider?: Maybe<OAuthProvider> } }> } }> } };


export const LoginUserDocument = gql`
    mutation LoginUser($loginUserInput: LoginUserInput!) {
  loginUser(loginUserInput: $loginUserInput) {
    token
    user {
      created_at
      email
      id
      name
      oauth_id
      oauth_provider
      userProject {
        project {
          created_at
          id
          name
          projectMember {
            role
          }
        }
        role
      }
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String!) {
  resetPassword(email: $email)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignupUserDocument = gql`
    mutation SignupUser($signupUserInput: SignupUserInput!) {
  signupUser(signupUserInput: $signupUserInput) {
    token
    user {
      created_at
      email
      id
      name
      oauth_id
      oauth_provider
    }
  }
}
    `;
export type SignupUserMutationFn = Apollo.MutationFunction<SignupUserMutation, SignupUserMutationVariables>;

/**
 * __useSignupUserMutation__
 *
 * To run a mutation, you first call `useSignupUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupUserMutation, { data, loading, error }] = useSignupUserMutation({
 *   variables: {
 *      signupUserInput: // value for 'signupUserInput'
 *   },
 * });
 */
export function useSignupUserMutation(baseOptions?: Apollo.MutationHookOptions<SignupUserMutation, SignupUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupUserMutation, SignupUserMutationVariables>(SignupUserDocument, options);
      }
export type SignupUserMutationHookResult = ReturnType<typeof useSignupUserMutation>;
export type SignupUserMutationResult = Apollo.MutationResult<SignupUserMutation>;
export type SignupUserMutationOptions = Apollo.BaseMutationOptions<SignupUserMutation, SignupUserMutationVariables>;
export const UserDocument = gql`
    query user {
  user {
    created_at
    email
    id
    name
    oauth_id
    oauth_provider
    userProject {
      project {
        created_at
        id
        name
        projectMember {
          role
          user {
            created_at
            email
            id
            name
            oauth_id
            oauth_provider
          }
        }
      }
      role
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;