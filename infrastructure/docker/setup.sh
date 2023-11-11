#!/usr/bin/env bash

pg_restore -U "$POSTGRES_USER"  -d "$POSTGRES_DB" /dump/dev.dump
