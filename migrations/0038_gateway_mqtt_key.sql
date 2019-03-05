-- +migrate Up
alter table gateway
    add column mqtt_key bytea not null,
    add column mqtt_key_hash character varying (200) not null;
