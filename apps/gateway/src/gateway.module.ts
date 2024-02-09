import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { authContext } from './auth.context';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from 'apps/users/src/users.module';
import { AuthService } from '../auth/auth.service';
import { AuthResolver } from '../auth/auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'apps/users/src/users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      // server: {
      //   context: authContext,
      // },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users',
              url: 'http://localhost:3001/graphql',
            },
          ],
        }),
        // buildService({ url }) {
        //   return new RemoteGraphQLDataSource({
        //     url,
        //     willSendRequest({ request, context }) {
        //       request.http.headers.set(
        //         'user',
        //         context.user ? JSON.stringify(context.user) : null,
        //       );
        //     },
        //   });
        // },
      },
    }),
  ],
  providers: [],
  exports: [],
})
export class GatewayModule {}
