# ops-ui-property

## Overview

This is a React **micro-frontend**. It requires the `ops-ui-container` to be displayed. It fetches data from our graphql staging endpoint.

## Local Development

[Click here to learn how to set up the ops-ui-container and locally deploy this repo.](https://github.com/spruceapp/ops-ui-container/blob/master/README.md)

## Gettin' goin

1. Replace `<UI_NAME>` in your repo with the desired name. Use find and replace.
1. Set the FIGMA (in consts/general) and the local port (in webpack.config).
1. Determine where to host the ui in Cloudfront. Note it's distro ID - you'll need it for CI/CD.
1. Set up the Circle environment. See env.example for the neccecary env vars.
1. Add the micro-ui to the ops-ui-container and point it at the S3 bucket in which the micro-ui is stored.


## Setting up circle

Add the env vars listed in env.example to your CircleCI project.

## Gettin' good

1. Conform to conventions in structure and style found in other micro-uis.
1. Where possible, use dependencies shared by other repos. For forms, use Formik. Use MUI where possible. Avoid classes, etc...
