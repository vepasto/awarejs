# awarejs

Aware JS is a library for detecting overlapping elements,
useful for example styling fixed positioned menus

## Usage

Please keep amount of `targets` and `sources` as small as possible, for onScroll event complexity is O(n^2)

### Including on your page

1. Include library:
    ```html
    <script type="text/javascript" src="aware.js"></script>
    ```

1. Define targets
    ```html
    <span class="aware-js-target"></span>
    ```

1. Define sources
    ```html
    <span class="aware-js-source" data-aware-js-hint="light"></span>
    ```

1. Add styles
    ```css
    .aware-js-target {
        color: white;
    }
    .aware-js-target[data-aware-js-hint='light'] {
        color: black;
    }
    ```

#### Description

When `.aware-js-target` overlaps with `.aware-js-source` 
the target's `data-aware-js-hint` attribute is updated accordingly.
## Reporting an Issue

1. Make sure the problem you're addressing is reproducible.
1. Use http://jsbin.com or http://jsfiddle.net to provide a test page.
1. Indicate what browsers the issue can be reproduced in. **Note: IE Compatibilty mode issues will not be addressed.**
1. What version of the plug-in is the issue reproducible in. Is it reproducible after updating to the latest version.

## License

Licensed under the MIT license.