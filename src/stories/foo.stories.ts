import { storiesOf } from '@storybook/angular';
import { FooComponent } from '../app/foo/foo.component';

storiesOf('/FooComponent', module)
  .add('default', () => ({
    component: FooComponent
  }));