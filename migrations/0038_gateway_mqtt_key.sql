-- +migrate Up
alter table gateway
    add column mqtt_key bytea not null;
