import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  newTodoField: React.RefObject<HTMLInputElement>;
  todos: Todo[];
};

export const Header: React.FC<Props> = ({ newTodoField, todos }) => {
  return (
    <header className="todoapp__header">
      <button
        aria-label="toggle-all-button"
        data-cy="ToggleAllButton"
        type="button"
        className={classNames(
          'todoapp__toggle-all',
          { active: todos.length !== 0 },
        )}
      />

      <form>
        <input
          data-cy="NewTodoField"
          type="text"
          ref={newTodoField}
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
};