#Document Player 

This application demonstrates the usage of `webapis.document`. With this API it is possible to have a document player in application. 


## How to use the Document Player application

1. place chosen document on a server
2. change line 100 in main.js so that 'docpath' points to your document
3. Run the app on your LFD.
4. Check available options on the screen.

## Supported platforms

Since Tizen 6.5


## Prerequisites

To use `webapis.document` API, embed below script into your `index.html`:

```html
<script src="$WEBAPIS/webapis/webapis.js"></script>
```

## Privileges and metadata

In order to use `webapis.document` API the following privilege must be included in `config.xml`:

```xml
<tizen:privilege name="http://developer.samsung.com/privilege/documentplay" />
```

Partner level privilege of certificate is supported.

### File structure

```
DocumentPlayer/ - PlayerAvplay sample app root folder
│
├── fonts/ - fonts used by this app
│   │
│   └── SAMSUNGSHARPSANS-REGULAR.OTF - font used in application
│  
│
├── css/ - styles used in the application
│   │
│   └── style.css - style for application's template
│
├── js/ - scripts used in the application
│   │
│   └── main.js - main application script
│
├── config.xml - application's configuration file
├── index.html - main document
└── README.md - this file
```


## Copyright and License

**Copyright 2021 Samsung Electronics, Inc.**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
