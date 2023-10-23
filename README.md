# Εισαγωγή στo Angular Framework

## 12. CRUD users: Read Users

- Πρόσβαση σε template variable του @Viewchild

## 11. CRUD users: List Users

## 10. CRUD users scaffolding

-

## 9. Http Client

- npm i -g json-server
- create users.json from users table, added id field
- json-server --watch users.json
- ng generate service app --dry-run
  CREATE src/app/app.service.spec.ts (342 bytes)
  CREATE src/app/app.service.ts (132 bytes)
- Για να μπορέσουμε να χρησιμοποιήσουμε το HttpClient πρέπει να το προσθέσουμε στο app.config.ts:

  ```typescript
  import { ApplicationConfig, importProvidersFrom } from "@angular/core";
  import { HttpClientModule } from "@angular/common/http";

  export const appConfig: ApplicationConfig = {
    providers: [importProvidersFrom(HttpClientModule)],
  };
  ```

- Get all users στο app.service
- Constructor inject app service στο app component
- Αρχικοποίηση του πίνακα user στο ngOnInit

## 8. reactive forms

-

## 7. Template driven forms

-

## 6. Component Output

- Χρήση του decorator `@Output()` σε χαρακτηριστικό της κλάσης για τη δημιουργία custom event στο component. Συνδυάζεται με το interface `EventEmitter<T>` όπου `Τ` ο τύπος των δεδομένων που μεταδίδει το custom event.
- To custom event συνήθως προκύπτει από ένα standard event στο template του component (πχ click πάνω σε ένα κουμπί).

> Χρήση του `index` με το \*ngFor (αυτόματη αρίθμηση με το `i` κατά τη διάσχιση του πίνακα):
>
> ```html
> <tr *ngFor="let user of userData; index as i">
>   <td>{{ i }}</td>
> </tr>
> ```

- Δεσμεύουμε τα custom events ενός child component δημιουργώντας event handlers όπως ακριβώς με τα standard events. Π.χ. στο template του parent component:

  ```html
  <app-output-demo [userData]="users" (deleteUser)="onDeleteUser($event)" (sendUser)="onSendUser($event)"> </app-output-demo>
  ```

- Στη συνέχεια δημιουργούμε στην κλάση του parent component τους event handlers:

  ```typescript
  onDeleteUser(i: number) {
    this.users.splice(i, 1);
  }

  onSendUser(user: Person) {
    this.sentUser = user;
  }

## 5. Event Binding (template -> controller)

- Click handlers
- Input handlers
- Two way binding

## 4. ngFor Directive

- 

## 3. Alternate component input

- input | undefined
- *ngIf για εμφανιση υπό συνθήκη στο template
- ng-container & ng-template

## 2. Component input

Δημιουργία interface για τα δεδομένα **τύπου Person**:

```
ng generate interface interfaces/person --dry-run
CREATE src/app/interfaces/person.ts (28 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

- Χρήση του decorator `@Input()` στο χαρακτηριστικό `person`, τύπου `Person`, στην κλάση `PersonComponent`.
- Ανάγκη αρχικοποίησης του χαρακτηριστικού με μια αρχική τιμή για τα δεδομένα.
- Έλεγχος εμφάνισης της αρχικής τιμής δεδομένων στην περίπτωση που δεν περνά είσοδος στο component.
- Μεταφορά δεδομένων του χαρακτηριστικού person πίσω στην κλάση `AppComponent`.
- Δέσμευση του χαρακτηριστικού εισόδου `person` της κλάσης `PersonComponent` με το χαρακτηριστικό `person` της κλάσης `AppComponent`: Στο `app.component.html` χρησιμοποιούμε τα brackets `[...]`:
  ```html
  ...
  <app-person [person]="person"></app-person>
  ```

## 1. Δημιουργία νέου component

```
ng generate component person --dry-run
```

Μας δείχνει τι ακριβώς θα παραχθεί χωρίς όμως να δημιουργεί πραγματικά τα αρχεία

```
CREATE src/app/person/person.component.css (0 bytes)
CREATE src/app/person/person.component.html (21 bytes)
CREATE src/app/person/person.component.spec.ts (554 bytes)
CREATE src/app/person/person.component.ts (297 bytes)

NOTE: The "--dry-run" option means no changes were made.
```

- Μεταφορά του χαρακτηριστικού `person` από την κλάση `AppComponent` στην κλάση `PersonComponent`.
- Διαπίστωση πως το css χρειάζεται επίσης να μεταφερθεί στο `person.component.css`.

## 0. Απλή δέσμευση χαρακτηριστικού


- Απλή δέσμευση (simple binding) χαρακτηριστικού της κλάσης του component στο template του component.
- Χρήση του placholder `{{<attribute_name>}}`.
- Αντικείμενο person και δέσμευση αντικειμένου στο template.
- Χαρακτηριστικά του person σε ιδιαίτερα κελιά στον πίνακα του template.

## -1. Εγκατάσταση του Angular Command Line:

```
npm install -g @angular/cli@latest
```

Έλεγχος εγκατάστασης:

```
ng version
```

Ενδεικτικό output:

```
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 16.2.6
Node: 18.16.0
Package Manager: npm 9.6.6
OS: linux x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1602.6 (cli-only)
@angular-devkit/core         16.2.6 (cli-only)
@angular-devkit/schematics   16.2.6 (cli-only)
@schematics/angular          16.2.6 (cli-only)
```

Δημιουργία νέας εφαρμογής:

```
ng new angular-introduction --standalone
```

Ενδεικτικό output:

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
            Standalone application structure is new and not yet supported by many existing 'ng add' and 'ng update' integrations with community libraries.
CREATE angular-introduction/README.md (1073 bytes)
CREATE angular-introduction/.editorconfig (274 bytes)
CREATE angular-introduction/.gitignore (548 bytes)
CREATE angular-introduction/angular.json (3020 bytes)
CREATE angular-introduction/package.json (1051 bytes)
CREATE angular-introduction/tsconfig.json (901 bytes)
CREATE angular-introduction/tsconfig.app.json (263 bytes)
CREATE angular-introduction/tsconfig.spec.json (273 bytes)
CREATE angular-introduction/.vscode/extensions.json (130 bytes)
CREATE angular-introduction/.vscode/launch.json (470 bytes)
CREATE angular-introduction/.vscode/tasks.json (938 bytes)
CREATE angular-introduction/src/main.ts (250 bytes)
CREATE angular-introduction/src/favicon.ico (948 bytes)
CREATE angular-introduction/src/index.html (305 bytes)
CREATE angular-introduction/src/styles.css (80 bytes)
CREATE angular-introduction/src/app/app.component.css (0 bytes)
CREATE angular-introduction/src/app/app.component.html (23083 bytes)
CREATE angular-introduction/src/app/app.component.spec.ts (930 bytes)
CREATE angular-introduction/src/app/app.component.ts (319 bytes)
CREATE angular-introduction/src/app/app.config.ts (117 bytes)
CREATE angular-introduction/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
    Successfully initialized git.
```