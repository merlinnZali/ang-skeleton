## Commands used

To generate module :- `ng g module skeleton-loader` 

To generate components :-
- `ng g c skeleton-loader --module=skeleton-loader --export=true --skip-tests=true --inline-template=true`

**commands explanation**:
- `--module=skeleton-loader`  will add components to skeleton-loader module.
- `--export=true` will add components to export array in module.
- `--skip-tests=true` will skip `spec.ts` file creation.
- `--inline-template=true` will create inline template in `component.ts` file.