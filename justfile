_default:
  @just --list

clean:
  rm -fv src/*

build:
  whiskers jupyterlab.tera
  whiskers index.tera
  jlpm run prettier
