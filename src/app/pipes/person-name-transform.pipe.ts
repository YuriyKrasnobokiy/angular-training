import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../services/users/user-contract';

@Pipe({
  name: 'personNameTransform'
})
export class PersonNameTransformPipe implements PipeTransform {

  transform(value: User, username: boolean = true): unknown {
    const showUsername = username;
    return `${value.name}${showUsername ? ` - ${value.username}` : ''}`;
  }

}
