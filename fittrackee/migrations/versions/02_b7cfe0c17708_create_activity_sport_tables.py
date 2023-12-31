"""create Activity & Sport tables

Revision ID: b7cfe0c17708
Revises: 9741fc7834da
Create Date: 2018-01-21 17:24:52.587814

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b7cfe0c17708'
down_revision = '9741fc7834da'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('sports',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('label', sa.String(length=50), nullable=False),
    sa.Column('img', sa.String(length=255), nullable=True),
    sa.Column('is_default', sa.Boolean(), default=False, nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('label')
    )
    op.create_table('activities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('sport_id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=255), nullable=True),
    sa.Column('gpx', sa.String(length=255), nullable=True),
    sa.Column('creation_date', sa.DateTime(), nullable=True),
    sa.Column('modification_date', sa.DateTime(), nullable=True),
    sa.Column('activity_date', sa.DateTime(), nullable=False),
    sa.Column('duration', sa.Interval(), nullable=False),
    sa.Column('pauses', sa.Interval(), nullable=True),
    sa.Column('moving', sa.Interval(), nullable=True),
    sa.Column('distance', sa.Numeric(precision=6, scale=3), nullable=True),
    sa.Column('min_alt', sa.Numeric(precision=6, scale=2), nullable=True),
    sa.Column('max_alt', sa.Numeric(precision=6, scale=2), nullable=True),
    sa.Column('descent', sa.Numeric(precision=7, scale=2), nullable=True),
    sa.Column('ascent', sa.Numeric(precision=7, scale=2), nullable=True),
    sa.Column('max_speed', sa.Numeric(precision=6, scale=2), nullable=True),
    sa.Column('ave_speed', sa.Numeric(precision=6, scale=2), nullable=True),
    sa.ForeignKeyConstraint(['sport_id'], ['sports.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###

    op.execute(
        """
        INSERT INTO sports (label, img, is_default)
        VALUES 
            ('Cycling (Sport)', '/img/sports/cycling-sport.png', True),
            ('Cycling (Transport)', '/img/sports/cycling-transport.png', True),
            ('Hiking', '/img/sports/hiking.png', True),
            ('Mountain Biking', '/img/sports/mountain-biking.png', True),
            ('Running', '/img/sports/running.png', True),
            ('Walking', '/img/sports/walking.png', True)
        """
    )


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('activities')
    op.drop_table('sports')
    # ### end Alembic commands ###
