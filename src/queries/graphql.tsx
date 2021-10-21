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

export type ConfirmResetPasswordInput = {
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type CreateProjectInput = {
  name: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  archived: Scalars['Boolean'];
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  emoji?: Maybe<FeedbackEmoji>;
  id: Scalars['String'];
  metadata: Scalars['String'];
  page: Scalars['String'];
  projectId: Scalars['String'];
  source?: Maybe<Source>;
  sourceId: Scalars['String'];
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
  addProjectMember: Array<ProjectMember>;
  confirmResetPassword: Scalars['Boolean'];
  createProject: Project;
  login: UserToken;
  loginSocial: UserToken;
  register: UserToken;
  registerSocial: UserToken;
  resetPassword: Scalars['Boolean'];
  updateFeedback: Feedback;
};


export type MutationAddProjectMemberArgs = {
  addProjectMember: AddProjectMemberInput;
};


export type MutationConfirmResetPasswordArgs = {
  confirmResetPassword: ConfirmResetPasswordInput;
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationLoginSocialArgs = {
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  registerUserInput: RegisterUserInput;
};


export type MutationRegisterSocialArgs = {
  registerSocialInput: RegisterSocialInput;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationUpdateFeedbackArgs = {
  updateFeedbackInput: UpdateFeedbackInput;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isPaying: Scalars['Boolean'];
  name: Scalars['String'];
  plan: ProjectPlan;
  projectMember: Array<ProjectMember>;
};

export type ProjectMember = {
  __typename?: 'ProjectMember';
  role: UserProjectRole;
  user: User;
};

export enum ProjectPlan {
  Business = 'business',
  Free = 'free',
  Pro = 'pro'
}

export type Query = {
  __typename?: 'Query';
  feedback: Array<Feedback>;
  project?: Maybe<Project>;
  user?: Maybe<User>;
};


export type QueryFeedbackArgs = {
  projectId: Scalars['String'];
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};

export type RegisterSocialInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  socialId: Scalars['String'];
  socialProvider: Scalars['String'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum SocialProvider {
  Githbu = 'githbu',
  Google = 'google'
}

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
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  socialId?: Maybe<Scalars['String']>;
  socialProvider?: Maybe<SocialProvider>;
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

export type ConfirmResetPasswordMutationVariables = Exact<{
  confirmResetPasswordInput: ConfirmResetPasswordInput;
}>;


export type ConfirmResetPasswordMutation = { __typename?: 'Mutation', confirmResetPassword: boolean };

export type LoginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserToken', token: string, user: { __typename?: 'User', createdAt: any, email: string, id: string, name: string, socialId?: Maybe<string>, socialProvider?: Maybe<SocialProvider>, userProject: Array<{ __typename?: 'UserProject', role: UserProjectRole, project: { __typename?: 'Project', createdAt: any, id: string, name: string, projectMember: Array<{ __typename?: 'ProjectMember', role: UserProjectRole }> } }> } } };

export type RegisterMutationVariables = Exact<{
  registerUserInput: RegisterUserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserToken', token: string, user: { __typename?: 'User', createdAt: any, email: string, id: string, name: string, socialId?: Maybe<string>, socialProvider?: Maybe<SocialProvider> } } };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: boolean };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: Maybe<{ __typename?: 'User', createdAt: any, email: string, id: string, name: string, socialId?: Maybe<string>, socialProvider?: Maybe<SocialProvider>, userProject: Array<{ __typename?: 'UserProject', role: UserProjectRole, project: { __typename?: 'Project', createdAt: any, id: string, name: string, projectMember: Array<{ __typename?: 'ProjectMember', role: UserProjectRole, user: { __typename?: 'User', createdAt: any, email: string, id: string, name: string, socialId?: Maybe<string>, socialProvider?: Maybe<SocialProvider> } }> } }> }> };


export const ConfirmResetPasswordDocument = gql`
    mutation ConfirmResetPassword($confirmResetPasswordInput: ConfirmResetPasswordInput!) {
  confirmResetPassword(confirmResetPassword: $confirmResetPasswordInput)
}
    `;
export type ConfirmResetPasswordMutationFn = Apollo.MutationFunction<ConfirmResetPasswordMutation, ConfirmResetPasswordMutationVariables>;

/**
 * __useConfirmResetPasswordMutation__
 *
 * To run a mutation, you first call `useConfirmResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmResetPasswordMutation, { data, loading, error }] = useConfirmResetPasswordMutation({
 *   variables: {
 *      confirmResetPasswordInput: // value for 'confirmResetPasswordInput'
 *   },
 * });
 */
export function useConfirmResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmResetPasswordMutation, ConfirmResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmResetPasswordMutation, ConfirmResetPasswordMutationVariables>(ConfirmResetPasswordDocument, options);
      }
export type ConfirmResetPasswordMutationHookResult = ReturnType<typeof useConfirmResetPasswordMutation>;
export type ConfirmResetPasswordMutationResult = Apollo.MutationResult<ConfirmResetPasswordMutation>;
export type ConfirmResetPasswordMutationOptions = Apollo.BaseMutationOptions<ConfirmResetPasswordMutation, ConfirmResetPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    token
    user {
      createdAt
      email
      id
      name
      socialId
      socialProvider
      userProject {
        project {
          createdAt
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
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerUserInput: RegisterUserInput!) {
  register(registerUserInput: $registerUserInput) {
    token
    user {
      createdAt
      email
      id
      name
      socialId
      socialProvider
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerUserInput: // value for 'registerUserInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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
export const UserDocument = gql`
    query user {
  user {
    createdAt
    email
    id
    name
    socialId
    socialProvider
    userProject {
      project {
        createdAt
        id
        name
        projectMember {
          role
          user {
            createdAt
            email
            id
            name
            socialId
            socialProvider
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