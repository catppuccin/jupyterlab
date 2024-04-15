# Print out all recipes when running `just`
_default:
    @just --list

# Variables
output := "src"
whiskers_cmd := "whiskers"

# Create the output directory
setup:
    mkdir -p {{output}}

# Remove all files in the output directory
clean:
    rm -fv {{output}}/*

# Generate all four flavors
all: setup
    {{whiskers_cmd}} jupyterlab.tera > {{output}}/palettes.ts
    {{whiskers_cmd}} index.tera > {{output}}/index.ts
