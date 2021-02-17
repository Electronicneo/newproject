import { createAction, props } from '@ngrx/store';
export const defaultSuccessMessage = createAction('[Tostr] Default Success Message');
export const failureMessage = createAction('[Tostr] failure Message', props());
export const warningMessage = createAction('[Tostr] failure Warning', props());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLmFjdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvdG9hc3RyL3RvYXN0ci5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWxELE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLFlBQVksQ0FDN0MsaUNBQWlDLENBRWxDLENBQUM7QUFHRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUN4Qyx5QkFBeUIsRUFDekIsS0FBSyxFQUEwQyxDQUNoRCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FDeEMseUJBQXlCLEVBQ3pCLEtBQUssRUFBdUIsQ0FDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgcHJvcHMgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFN1Y2Nlc3NNZXNzYWdlID0gY3JlYXRlQWN0aW9uKFxyXG4gICAgJ1tUb3N0cl0gRGVmYXVsdCBTdWNjZXNzIE1lc3NhZ2UnLFxyXG4gICBcclxuICApO1xyXG5cclxuXHJcbiAgZXhwb3J0IGNvbnN0IGZhaWx1cmVNZXNzYWdlID0gY3JlYXRlQWN0aW9uKFxyXG4gICAgJ1tUb3N0cl0gZmFpbHVyZSBNZXNzYWdlJyxcclxuICAgIHByb3BzPHsgbWVzc2FnZTogc3RyaW5nICwgIHRpdGxlIDogIHN0cmluZyB9PigpLFxyXG4gICk7XHJcblxyXG4gIGV4cG9ydCBjb25zdCB3YXJuaW5nTWVzc2FnZSA9IGNyZWF0ZUFjdGlvbihcclxuICAgICdbVG9zdHJdIGZhaWx1cmUgV2FybmluZycsXHJcbiAgICBwcm9wczx7IG1lc3NhZ2U6IHN0cmluZyB9PigpLFxyXG4gICk7Il19